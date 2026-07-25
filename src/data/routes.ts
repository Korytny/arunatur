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
    id: "blue-route",
    name: "Западный маршрут",
    description: "Мегалиты Скала Шапка → Кызыл Бек → Ахмет Скала → Смотровая",
    color: "#3B82F6",
    weight: 4,
    points: [
      [44.042952, 40.752703],
      [44.020457, 40.879139],
      [44.094744, 40.958312],
      [44.119154, 41.036618],
    ],
    waypoints: [
      { name: "Мегалиты Скала Шапка", coords: [44.042952, 40.752703] },
      { name: "Кызыл Бек", coords: [44.020457, 40.879139] },
      { name: "Ахмет Скала", coords: [44.094744, 40.958312] },
      { name: "Смотровая", coords: [44.119154, 41.036618] },
    ],
  },
  {
    id: "red-route",
    name: "Восточный маршрут",
    description: "Камень Гриб → Мощевая Балка → Водопад Будулай → Заброшенная шахта → Рожкао",
    color: "#EF4444",
    weight: 4,
    points: [
      [43.958280, 40.941906],
      [43.933857, 40.960595],
      [43.885045, 40.947788],
      [43.861760, 40.936738],
      [43.815645, 40.912701],
    ],
    waypoints: [
      { name: "Камень Гриб", coords: [43.958280, 40.941906] },
      { name: "Мощевая Балка", coords: [43.933857, 40.960595] },
      { name: "Водопад Будулай", coords: [43.885045, 40.947788] },
      { name: "Заброшенная шахта", coords: [43.861760, 40.936738] },
      { name: "Рожкао", coords: [43.815645, 40.912701] },
    ],
  },
];
