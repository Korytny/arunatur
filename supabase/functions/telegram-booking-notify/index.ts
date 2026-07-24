// Supabase Edge Function: Telegram booking notification
// Triggered by Database Webhook on bookings INSERT
// Sends a message to the host's Telegram via Bot API
//
// Environment variables (set in Supabase Dashboard → Edge Functions):
//   TELEGRAM_BOT_TOKEN — token from @BotFather
//   TELEGRAM_CHAT_ID   — host's Telegram chat ID (or group ID)
//
// Setup:
//   1. Create a bot via @BotFather, get the token
//   2. Find your chat ID: send a message to the bot, visit
//      https://api.telegram.org/bot<YOUR_TOKEN>/getUpdates
//   3. Deploy: `supabase functions deploy telegram-booking-notify`
//   4. In Supabase Dashboard → Database → Webhooks, create a webhook:
//      - Table: bookings
//      - Event: INSERT
//      - Type: HTTP Request
//      - URL: https://<project>.supabase.co/functions/v1/telegram-booking-notify
//      - Auth: anon key (or service_role key for more security)
//      - Headers: Authorization: Bearer <anon-key>

import { serve } from "https://deno.land/std@0.177.0/http/server.ts";

interface Booking {
  id: string;
  guest_name: string;
  phone: string;
  email: string | null;
  check_in: string;
  check_out: string;
  guests_count: number;
  needs_excursions: boolean;
  needs_meals: boolean;
  comment: string | null;
  created_at: string;
}

interface WebhookPayload {
  type: "INSERT";
  table: string;
  record: Booking;
  schema: "public";
  old_record: null;
}

function escapeMarkdown(text: string): string {
  return text
    .replace(/_/g, "\\_")
    .replace(/\*/g, "\\*")
    .replace(/\[/g, "\\[")
    .replace(/`/g, "\\`");
}

async function sendTelegramMessage(
  botToken: string,
  chatId: string,
  text: string,
): Promise<Response> {
  const url = `https://api.telegram.org/bot${botToken}/sendMessage`;
  const payload = {
    chat_id: chatId,
    text,
    parse_mode: "MarkdownV2",
  };
  return fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
}

serve(async (req) => {
  // CORS headers for Supabase
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: { "Access-Control-Allow-Origin": "*" } });
  }

  try {
    const payload: WebhookPayload = await req.json();
    const b = payload.record;

    const botToken = Deno.env.get("TELEGRAM_BOT_TOKEN");
    const chatId = Deno.env.get("TELEGRAM_CHAT_ID");

    if (!botToken || !chatId) {
      console.error("Missing TELEGRAM_BOT_TOKEN or TELEGRAM_CHAT_ID");
      return new Response("Missing config", { status: 500 });
    }

    const emoji = b.needs_excursions && b.needs_meals ? "🏔️🍽️" : b.needs_excursions ? "🏔️" : b.needs_meals ? "🍽️" : "🏠";

    const message = [
      `*${escapeMarkdown("🆕 НОВАЯ ЗАЯВКА НА БРОНИРОВАНИЕ")}*`,
      ``,
      `${emoji} *${escapeMarkdown(b.guest_name)}*`,
      `📞 \`${escapeMarkdown(b.phone)}\``,
      b.email ? `📧 \`${escapeMarkdown(b.email)}\`` : null,
      ``,
      `📅 Заезд: *${escapeMarkdown(b.check_in)}*`,
      `📅 Выезд: *${escapeMarkdown(b.check_out)}*`,
      `👥 Гостей: *${b.guests_count}*`,
      ``,
      b.needs_excursions ? "✅ Нужны экскурсии" : "❌ Экскурсии не нужны",
      b.needs_meals ? "✅ Нужно питание" : "❌ Питание не нужно",
      b.comment ? `\n💬 _${escapeMarkdown(b.comment)}_` : null,
      ``,
      `🆔 \`${b.id.slice(0, 8)}…\``,
    ]
      .filter(Boolean)
      .join("\n");

    const tgRes = await sendTelegramMessage(botToken, chatId, message);
    const tgBody = await tgRes.text();

    if (!tgRes.ok) {
      console.error("Telegram API error:", tgBody);
      return new Response(`Telegram error: ${tgBody}`, { status: 500 });
    }

    return new Response("OK", { status: 200 });
  } catch (err) {
    console.error("Function error:", err);
    return new Response(String(err), { status: 500 });
  }
});
