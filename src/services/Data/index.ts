import { Character } from "shared/types";

export const Data = {
  _formatItems(entries: []): string[] {
    const tmpList: string[] = entries.map((entry: any) => {
      return entry.name;
    });

    return tmpList;
  },

  formatData(data = []): Character[] {
    if (data.length === 0) {
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
};
