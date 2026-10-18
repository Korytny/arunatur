import { useQuery } from "@tanstack/react-query";
import {
  Sun,
  Cloud,
  CloudSun,
  CloudRain,
  CloudSnow,
  CloudFog,
  CloudLightning,
  CloudDrizzle,
  Droplets,
  Wind,
  Thermometer,
} from "lucide-react";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

// Open-Meteo API — free, no API key required
const LAT = 43.9889;
const LON = 40.9569;

// WMO weather codes → Russian label + icon
function weatherInfo(code: number): { label: string; icon: React.ReactNode } {
  if (code === 0) return { label: "Ясно", icon: <Sun className="w-6 h-6" /> };
  if (code <= 2) return { label: "Переменная облачность", icon: <CloudSun className="w-6 h-6" /> };
  if (code === 3) return { label: "Пасмурно", icon: <Cloud className="w-6 h-6" /> };
  if (code >= 45 && code <= 48) return { label: "Туман", icon: <CloudFog className="w-6 h-6" /> };
  if (code >= 51 && code <= 57) return { label: "Морось", icon: <CloudDrizzle className="w-6 h-6" /> };
  if (code >= 61 && code <= 67) return { label: "Дождь", icon: <CloudRain className="w-6 h-6" /> };
  if (code >= 71 && code <= 77) return { label: "Снег", icon: <CloudSnow className="w-6 h-6" /> };
  if (code >= 80 && code <= 82) return { label: "Ливень", icon: <CloudRain className="w-6 h-6" /> };
  if (code >= 85 && code <= 86) return { label: "Снегопад", icon: <CloudSnow className="w-6 h-6" /> };
  if (code >= 95) return { label: "Гроза", icon: <CloudLightning className="w-6 h-6" /> };
  return { label: "Неизвестно", icon: <Cloud className="w-6 h-6" /> };
}

interface OpenMeteoResponse {
  current: {
    temperature_2m: number;
    apparent_temperature: number;
    relative_humidity_2m: number;
    weather_code: number;
    wind_speed_10m: number;
  };
  daily: {
    time: string[];
    temperature_2m_max: number[];
    temperature_2m_min: number[];
    weather_code: number[];
  };
}

async function fetchWeather(): Promise<OpenMeteoResponse> {
  const params = new URLSearchParams({
    latitude: String(LAT),
    longitude: String(LON),
    current: "temperature_2m,apparent_temperature,relative_humidity_2m,weather_code,wind_speed_10m",
    daily: "temperature_2m_max,temperature_2m_min,weather_code",
    timezone: "auto",
    forecast_days: "16",
  });
  const res = await fetch(`https://api.open-meteo.com/v1/forecast?${params}`);
  if (!res.ok) throw new Error("Weather fetch failed");
  return res.json();
}

function dayName(dateStr: string): string {
  const d = new Date(dateStr + "T12:00:00");
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);

  if (d.toDateString() === today.toDateString()) return "Сегодня";
  if (d.toDateString() === tomorrow.toDateString()) return "Завтра";
  return d.toLocaleDateString("ru-RU", { weekday: "short", day: "numeric" });
}

export function WeatherWidget() {
  const { data, isLoading, error } = useQuery<OpenMeteoResponse>({
    queryKey: ["weather", LAT, LON],
    queryFn: fetchWeather,
    refetchInterval: 30 * 60 * 1000, // refresh every 30 min
    staleTime: 10 * 60 * 1000,
    retry: 2,
    retryDelay: 1000,
  });

  if (isLoading) {
    return (
      <section className="py-24 bg-section-5">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="mb-16">
              <h2 className="text-minimal text-muted-foreground mb-4">ПОГОДА В КУРДЖИНОВО</h2>
              <h3 className="text-4xl md:text-6xl font-light text-architectural">
                Прогноз на {new Date().toLocaleDateString("ru-RU", { day: "numeric", month: "long" })}
              </h3>
            </div>
            <div className="grid md:grid-cols-[1fr_auto] gap-8 items-start">
              <div className="bg-muted/30 rounded-3xl p-10 shadow-elegant animate-pulse">
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 bg-muted-foreground/10 rounded-full" />
                  <div>
                    <div className="h-10 w-28 bg-muted-foreground/10 rounded mb-2" />
                    <div className="h-4 w-36 bg-muted-foreground/10 rounded" />
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-6 mt-8">
                  {[...Array(3)].map((_, i) => (
                    <div key={i} className="h-20 bg-muted-foreground/10 rounded-2xl" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (error || !data) {
    return (
      <section className="py-24 bg-section-5">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="mb-16">
              <h2 className="text-minimal text-muted-foreground mb-4">ПОГОДА В КУРДЖИНОВО</h2>
              <h3 className="text-4xl md:text-6xl font-light text-architectural">
                Прогноз на сегодня
              </h3>
            </div>
            <div className="bg-card rounded-2xl p-8 shadow-elegant border border-border/50">
              <p className="text-muted-foreground text-center">
                Данные о погоде временно недоступны
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (!data) {
    return (
      <section className="py-24 bg-section-5">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="mb-16">
              <h2 className="text-minimal text-muted-foreground mb-4">ПОГОДА В КУРДЖИНОВО</h2>
              <h3 className="text-4xl md:text-6xl font-light text-architectural">
                Загрузка...
              </h3>
            </div>
            <div className="bg-muted/30 rounded-3xl p-10 shadow-elegant animate-pulse">
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 bg-muted-foreground/10 rounded-full" />
                <div>
                  <div className="h-10 w-28 bg-muted-foreground/10 rounded mb-2" />
                  <div className="h-4 w-36 bg-muted-foreground/10 rounded" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  const current = data.current;
  const daily = data.daily;

  // Round to integer
  const temp = Math.round(current.temperature_2m);
  const feelsLike = Math.round(current.apparent_temperature);
  const wind = Math.round(current.wind_speed_10m);
  const humidity = current.relative_humidity_2m;
  const { label, icon } = weatherInfo(current.weather_code);

  return (
    <section className="py-24 bg-section-5">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-minimal text-muted-foreground mb-4">ПОГОДА В КУРДЖИНОВО</h2>
            <h3 className="text-4xl md:text-6xl font-light text-architectural">
              Прогноз на сегодня
            </h3>
          </div>

          <div className="space-y-6">
            {/* Current weather card */}
            <div className="bg-card rounded-2xl p-6 shadow-elegant border border-border/50">
              <div className="flex items-center gap-4">
                <div className="text-primary">
                  {icon}
                </div>
                <div>
                  <div className="text-4xl font-light text-architectural">
                    {temp}°
                  </div>
                  <div className="text-muted-foreground text-sm">
                    {label}
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3 mt-5">
                <div className="flex items-center gap-2 bg-muted/30 rounded-xl px-3 py-3">
                  <Thermometer className="w-4 h-4 text-muted-foreground" />
                  <div>
                    <div className="text-[10px] text-muted-foreground text-minimal">Ощущается</div>
                    <div className="text-base font-medium">{feelsLike}°</div>
                  </div>
                </div>
                <div className="flex items-center gap-2 bg-muted/30 rounded-xl px-3 py-3">
                  <Droplets className="w-4 h-4 text-muted-foreground" />
                  <div>
                    <div className="text-[10px] text-muted-foreground text-minimal">Влажность</div>
                    <div className="text-base font-medium">{humidity}%</div>
                  </div>
                </div>
                <div className="flex items-center gap-2 bg-muted/30 rounded-xl px-3 py-3">
                  <Wind className="w-4 h-4 text-muted-foreground" />
                  <div>
                    <div className="text-[10px] text-muted-foreground text-minimal">Ветер</div>
                    <div className="text-base font-medium">{wind} км/ч</div>
                  </div>
                </div>
              </div>
            </div>

            {/* 16-day chart */}
            <div className="bg-card rounded-2xl p-5 shadow-elegant border border-border/50">
              <div className="text-minimal text-muted-foreground text-xs mb-3">
                ПРОГНОЗ НА 16 ДНЕЙ
              </div>
              <ResponsiveContainer width="100%" height={140}>
                <AreaChart
                  data={daily.time.map((date, i) => ({
                    date: new Date(date + "T12:00:00").toLocaleDateString("ru-RU", {
                      day: "numeric",
                      month: "short",
                    }),
                    max: Math.round(daily.temperature_2m_max[i]),
                    min: Math.round(daily.temperature_2m_min[i]),
                  }))}
                  margin={{ top: 4, right: 0, left: -20, bottom: 0 }}
                >
                  <defs>
                    <linearGradient id="tempMax" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#ea384c" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="#ea384c" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient id="tempMin" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#38bdf8" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="#38bdf8" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <XAxis
                    dataKey="date"
                    tick={{ fontSize: 9, fill: "hsl(var(--muted-foreground))" }}
                    tickLine={false}
                    axisLine={false}
                    interval={2}
                  />
                  <YAxis
                    tick={{ fontSize: 9, fill: "hsl(var(--muted-foreground))" }}
                    tickLine={false}
                    axisLine={false}
                    domain={["dataMin - 3", "dataMax + 3"]}
                  />
                  <Tooltip
                    contentStyle={{
                      background: "hsl(var(--card))",
                      border: "1px solid hsl(var(--border))",
                      borderRadius: 8,
                      fontSize: 12,
                    }}
                    labelFormatter={(_, payload) => payload?.[0]?.payload?.date ?? ""}
                    formatter={(value: number) => [`${value}°`, ""]}
                  />
                  <Area
                    type="monotone"
                    dataKey="max"
                    stroke="#ea384c"
                    strokeWidth={1.5}
                    fill="url(#tempMax)"
                    dot={false}
                    activeDot={{ r: 3 }}
                  />
                  <Area
                    type="monotone"
                    dataKey="min"
                    stroke="#38bdf8"
                    strokeWidth={1.5}
                    fill="url(#tempMin)"
                    dot={false}
                    activeDot={{ r: 3 }}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="mt-6 text-right">
            <span className="text-[10px] text-muted-foreground/50 text-minimal">
              Данные: Open-Meteo
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
