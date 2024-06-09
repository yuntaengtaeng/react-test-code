interface Drink {
  id: number;
  name: string;
  count: number;
}

const DRINK_MAP: Drink[] = [
  {
    id: 1,
    name: '오렌지 주스',
    count: 3,
  },
  {
    id: 2,
    name: '포도 주스',
    count: 10,
  },
  {
    id: 3,
    name: '사과 주스',
    count: 12,
  },
  {
    id: 4,
    name: '딸기 주스',
    count: 8,
  },
  {
    id: 5,
    name: '바나나 주스',
    count: 1,
  },
  {
    id: 6,
    name: '수박 주스',
    count: 0,
  },
];

interface Parameter {
  ids?: number[] | number;
  keyword?: string;
  type?: 'ALL' | 'MAX_COUNT' | 'MIN_COUNT';
}

const searchDrink = async (params?: Parameter): Promise<Drink[]> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let results = [...DRINK_MAP];

      if (params?.ids !== undefined) {
        const ids = Array.isArray(params.ids) ? params.ids : [params.ids];
        results = results.filter((drink) => ids.includes(drink.id));
      }

      if (params?.keyword) {
        const keyword = params.keyword;
        results = results.filter((drink) => drink.name.includes(keyword));
      }

      if (params?.type) {
        if (params.type === 'MAX_COUNT') {
          const maxCount = Math.max(...results.map((drink) => drink.count));
          results = results.filter((drink) => drink.count === maxCount);
        } else if (params.type === 'MIN_COUNT') {
          const minCount = Math.min(...results.map((drink) => drink.count));
          results = results.filter((drink) => drink.count === minCount);
        }
      }
      resolve(results);
    }, 1);
  });
};

export default searchDrink;
