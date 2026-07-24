export interface RoutePoint {
  name: string;
  description?: string;
  coords: [number, number];
}

export interface Route {
  id: string;
  name: string;
  description: string;
  color: string;
  dashArray?: string;
  weight?: number;
  points: [number, number][];
  waypoints?: RoutePoint[];
}

export const routes: Route[] = [
  {
    id: "kurjinovo-loop",
    name: "Курджиново — водопад — поляна",
    description: "Живописный маршрут по окрестностям посёлка с посещением водопада и места для привала",
    color: "#EF4444",
    dashArray: "8 6",
    weight: 3,
    points: [
      [43.9889, 40.9569],
      [43.9950, 40.9700],
      [43.9800, 40.9750],
      [43.9850, 40.9450],
    ],
    waypoints: [
      { name: "Курджиново — старт", description: "Центральная площадь посёлка", coords: [43.9889, 40.9569] },
      { name: "Смотровая точка", description: "Панорамный вид на долину", coords: [43.9950, 40.9700] },
      { name: "Водопад", description: "Небольшой, но живописный водопад", coords: [43.9800, 40.9750] },
      { name: "Поляна для привала", description: "Отличное место для пикника", coords: [43.9850, 40.9450] },
    ],
  },
  {
    id: "kurjinovo-river",
    name: "Вдоль реки Большая Лаба",
    description: "Прогулка по берегу реки через лесной массив",
    color: "#3B82F6",
    weight: 3,
    points: [
      [43.9889, 40.9569],
      [43.9920, 40.9480],
      [43.9860, 40.9350],
      [43.9780, 40.9400],
    ],
    waypoints: [
      { name: "Старт от центра", coords: [43.9889, 40.9569] },
      { name: "Спуск к реке", coords: [43.9920, 40.9480] },
      { name: "Берег реки", description: "Красивый вид на Большую Лабу", coords: [43.9860, 40.9350] },
      { name: "Лесная опушка", coords: [43.9780, 40.9400] },
    ],
  },
  {
    id: "kurjinovo-mountain",
    name: "Тропа к горе",
    description: "Маршрут к подножию горы с набором высоты",
    color: "#F59E0B",
    dashArray: "4 4",
    weight: 2,
    points: [
      [43.9889, 40.9569],
      [43.9970, 40.9600],
      [44.0050, 40.9550],
      [44.0120, 40.9480],
    ],
    waypoints: [
      { name: "Старт", coords: [43.9889, 40.9569] },
      { name: "Подъём", coords: [43.9970, 40.9600] },
      { name: "Смотровая", description: "Открывается вид на посёлок", coords: [44.0050, 40.9550] },
      { name: "Подножие горы", coords: [44.0120, 40.9480] },
    ],
  },
];
