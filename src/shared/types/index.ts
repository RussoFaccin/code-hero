export interface Character {
  id: number | string;
  name: string;
  thumb: string;
  series: string[];
  events: string[];
}

export interface Comic {
  title: string;
  thumb: string;
  url: string
}
