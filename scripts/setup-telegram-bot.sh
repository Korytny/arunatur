#!/usr/bin/env bash
# ==============================================================
# Setup Telegram bot for booking notifications
# ==============================================================
# This script helps deploy the Supabase Edge Function that
# notifies you in Telegram when someone submits a booking.
#
# Prerequisites:
#   1. A Telegram bot (create via @BotFather)
#   2. Supabase CLI installed (brew install supabase/tap/supabase)
#   3. Your Supabase project linked locally (supabase link)
#
# Usage:
#   1. Create a bot via @BotFather, save the token
#   2. Find your chat ID:
#      - Send a message to the bot
#      - Visit https://api.telegram.org/bot<TOKEN>/getUpdates
#      - Look for "chat":{"id":<YOUR_ID>} in the response
#   3. Run this script:
#      bash scripts/setup-telegram-bot.sh <BOT_TOKEN> <CHAT_ID>
# ==============================================================

set -euo pipefail

if [ $# -lt 2 ]; then
  echo "Usage: $0 <TELEGRAM_BOT_TOKEN> <TELEGRAM_CHAT_ID>"
  echo ""
  echo "Example:"
  echo "  $0 123456:ABC-DEF1234ghIkl-zyx57W2v1u123ew11 987654321"
  exit 1
fi

BOT_TOKEN="$1"
CHAT_ID="$2"

echo "🔧 Deploying Telegram booking notification function..."
supabase functions deploy telegram-booking-notify --no-verify-jwt

echo "🔐 Setting secrets..."
supabase secrets set TELEGRAM_BOT_TOKEN="$BOT_TOKEN"
supabase secrets set TELEGRAM_CHAT_ID="$CHAT_ID"

echo ""
echo "✅ Done! Now create a Database Webhook in Supabase Dashboard:"
echo ""
echo "   1. Go to https://supabase.com/dashboard/project/YOUR_PROJECT/database/hooks"
echo "   2. Click 'Create a new hook'"
echo "   3. Configure:"
echo "      - Name: booking-notify"
echo "      - Table: bookings"
echo "      - Events: Insert"
echo "      - Type: HTTP Request"
echo "      - URL: https://<PROJECT_REF>.supabase.co/functions/v1/telegram-booking-notify"
echo "      - HTTP Method: POST"
echo "      - Headers:"
echo "        Content-Type: application/json"
echo "        Authorization: Bearer <SUPABASE_ANON_KEY>"
echo ""
echo "   You'll get a test notification right after saving if you have test bookings."
