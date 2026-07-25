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
    id: "kyzyl-bek",
    name: "Кызыл Бек",
    type: "viewpoint",
    coords: [44.020457, 40.879139],
    description: "Видовая точка с панорамой на хребты и долины",
  },
  {
    id: "akhmet-scala",
    name: "Ахмет Скала",
    type: "natural",
    coords: [44.094744, 40.958312],
    description: "Живописная скала в окрестностях",
  },
  {
    id: "rozhkao",
    name: "Рожкао",
    type: "recreation",
    coords: [43.815645, 40.912701],
    description: "Горный посёлок, популярное место для походов",
  },
  {
    id: "moshchevaya-balka",
    name: "Мощевая Балка",
    type: "natural",
    coords: [43.933857, 40.960595],
    description: "Живописная балка с богатой природой",
  },
  {
    id: "kamen-grib",
    name: "Камень Гриб",
    type: "natural",
    coords: [43.958280, 40.941906],
    description: "Необычная скальная формация, напоминающая гриб",
  },
  {
    id: "abandoned-mine",
    name: "Заброшенная шахта",
    type: "historical",
    coords: [43.861760, 40.936738],
    description: "Старая горная выработка",
  },
  {
    id: "budulay-waterfall",
    name: "Водопад Будулай",
    type: "waterfall",
    coords: [43.885045, 40.947788],
    description: "Живописный водопад на горной реке",
  },
  {
    id: "smotrovaya",
    name: "Смотровая",
    type: "viewpoint",
    coords: [44.119154, 41.036618],
    description: "Обзорная точка с панорамным видом",
  },
  {
    id: "termalny-kompleks",
    name: "Термальный комплекс",
    type: "recreation",
    coords: [44.424836, 40.738107],
    description: "Горячие источники для отдыха и оздоровления",
  },
  {
    id: "megalithy-scalp",
    name: "Мегалиты Скала Шапка",
    type: "natural",
    coords: [44.042952, 40.752703],
    description: "Древние мегалитические сооружения на вершине",
  },
];
