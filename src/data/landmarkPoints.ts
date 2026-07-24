export interface LandmarkPoint {
  id: string;
  name: string;
  type: "viewpoint" | "waterfall" | "historical" | "natural" | "cultural" | "religious" | "recreation";
  coords: [number, number];
  description?: string;
  image?: string;
}

export const landmarkPoints: LandmarkPoint[] = [
  {
    id: "viewpoint-1",
    name: "Смотровая площадка «Вершина»",
    type: "viewpoint",
    coords: [43.9950, 40.9700],
    description: "Панорамный вид на Курджиново и долину реки Большая Лаба",
  },
  {
    id: "waterfall-1",
    name: "Водопад «Серебряные струи»",
    type: "waterfall",
    coords: [43.9800, 40.9750],
    description: "Живописный водопад высотой около 10 метров",
  },
  {
    id: "natural-1",
    name: "Урочище «Каменный хаос»",
    type: "natural",
    coords: [43.9780, 40.9650],
    description: "Причудливые скальные образования среди леса",
  },
  {
    id: "historical-1",
    name: "Памятник воинам-освободителям",
    type: "historical",
    coords: [43.9892, 40.9545],
    description: "Мемориал в центре Курджиново",
  },
  {
    id: "religious-1",
    name: "Храм Святого Георгия",
    type: "religious",
    coords: [43.9900, 40.9555],
    description: "Православный храм в центре станицы",
  },
  {
    id: "natural-2",
    name: "Река Большая Лаба",
    type: "natural",
    coords: [43.9860, 40.9500],
    description: "Горная река, популярное место для рыбалки и отдыха",
  },
  {
    id: "cultural-1",
    name: "Музей казачьего быта",
    type: "cultural",
    coords: [43.9885, 40.9540],
    description: "Экспозиция предметов быта и культуры кубанских казаков",
  },
  {
    id: "viewpoint-2",
    name: "Гора Шапка",
    type: "viewpoint",
    coords: [44.0020, 40.9620],
    description: "Возвышенность с круговой панорамой на окрестные хребты",
  },
  {
    id: "recreation-1",
    name: "Поляна «Сказка»",
    type: "recreation",
    coords: [43.9830, 40.9600],
    description: "Большая поляна для пикников и активного отдыха",
  },
  {
    id: "waterfall-2",
    name: "Водопад «Девичьи слёзы»",
    type: "waterfall",
    coords: [43.9760, 40.9800],
    description: "Каскадный водопад в труднодоступном ущелье",
  },
];
