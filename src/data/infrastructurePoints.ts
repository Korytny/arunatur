export interface InfrastructurePoint {
  id: string;
  name: string;
  type: "parking" | "cafe" | "shop" | "pharmacy" | "atm" | "gas" | "bus" | "medical" | "banya" | "info" | "wc";
  coords: [number, number];
  address?: string;
  phone?: string;
  hours?: string;
}

export const infrastructurePoints: InfrastructurePoint[] = [
  {
    id: "parking-1",
    name: "Парковка у администрации",
    type: "parking",
    coords: [43.9899, 40.9550],
    address: "ул. Ленина, 1",
  },
  {
    id: "parking-2",
    name: "Парковка у рынка",
    type: "parking",
    coords: [43.9880, 40.9565],
    address: "ул. Советская, 5",
  },
  {
    id: "cafe-1",
    name: "Кафе «Уют»",
    type: "cafe",
    coords: [43.9890, 40.9570],
    address: "ул. Ленина, 12",
    hours: "09:00–22:00",
  },
  {
    id: "cafe-2",
    name: "Столовая «Дом»",
    type: "cafe",
    coords: [43.9875, 40.9548],
    address: "ул. Октябрьская, 3",
    hours: "08:00–20:00",
  },
  {
    id: "shop-1",
    name: "Магнит",
    type: "shop",
    coords: [43.9893, 40.9562],
    address: "ул. Ленина, 8",
    hours: "08:00–22:00",
  },
  {
    id: "shop-2",
    name: "Пятёрочка",
    type: "shop",
    coords: [43.9870, 40.9555],
    address: "ул. Советская, 10",
    hours: "08:00–22:00",
  },
  {
    id: "pharmacy-1",
    name: "Аптека №42",
    type: "pharmacy",
    coords: [43.9887, 40.9568],
    address: "ул. Ленина, 10",
    hours: "08:00–21:00",
  },
  {
    id: "atm-1",
    name: "Сбербанк (банкомат)",
    type: "atm",
    coords: [43.9885, 40.9563],
    address: "ул. Ленина, 7",
  },
  {
    id: "gas-1",
    name: "АЗС «Лукойл»",
    type: "gas",
    coords: [43.9850, 40.9520],
    address: "ул. Вокзальная, 1",
    hours: "круглосуточно",
  },
  {
    id: "bus-1",
    name: "Автостанция Курджиново",
    type: "bus",
    coords: [43.9855, 40.9530],
    address: "ул. Вокзальная, 2",
  },
  {
    id: "medical-1",
    name: "Участковая больница",
    type: "medical",
    coords: [43.9905, 40.9540],
    address: "ул. Больничная, 3",
    phone: "+7 (878) 765-43-21",
  },
  {
    id: "banya-1",
    name: "Баня «Русский пар»",
    type: "banya",
    coords: [43.9882, 40.9580],
    address: "ул. Ленина, 15",
    hours: "12:00–23:00",
  },
  {
    id: "info-1",
    name: "Туристический информационный центр",
    type: "info",
    coords: [43.9895, 40.9558],
    address: "ул. Ленина, 5",
    hours: "09:00–18:00",
  },
  {
    id: "wc-1",
    name: "Общественный туалет (центральная площадь)",
    type: "wc",
    coords: [43.9888, 40.9560],
    address: "центральная площадь",
  },
];
