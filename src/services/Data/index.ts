import { Character, Comic } from "shared/types";

export const Data = {
  _formatItems(entries: []): string[] {
    const tmpList: string[] = entries.map((entry: any) => {
      return entry.name;
    });

    return tmpList;
  },

  formatData(data: any[]): Character[] {
    if (!data || data.length === 0) {
      return [];
    }

    const tmpList: Character[] = data.map((item: any) => {
      return {
        id: item.id,
        name: item.name,
        thumb: `${item.thumbnail.path}.${item.thumbnail.extension}`,
        series: this._formatItems(item.series.items),
        events: this._formatItems(item.events.items),
      };
    });

    return tmpList;
  },

  formatComicData(data: any[]): Comic[] {
    if (!data || data.length === 0) {
      return [];
    }

    const tmpList: Comic[] = data.map((item: any) => {
      return {
        id: item.id,
        title: item.title,
        thumb: `${item.thumbnail.path}.${item.thumbnail.extension}`,
        url: item.urls[0].url,
      } as Comic;
    });

    return tmpList;
  },
};
