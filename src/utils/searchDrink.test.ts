import searchDrink from './searchDrink';

describe('searchDrink', () => {
  it('파라미터가 제공되지 않을 때 모든 음료를 반환해야 함', async () => {
    const results = await searchDrink();
    expect(results).toHaveLength(6);
  });

  it('ids 파라미터가 제공될 때 해당하는 id의 음료를 필터링해야 함', async () => {
    const results = await searchDrink({ ids: [1, 3, 5] });
    expect(results).toHaveLength(3);
    expect(results.map((drink) => drink.id)).toEqual([1, 3, 5]);
  });

  it('단일 id 파라미터가 제공될 때 해당하는 id의 음료를 필터링해야 함', async () => {
    const results = await searchDrink({ ids: 2 });
    expect(results).toHaveLength(1);
    expect(results[0].id).toBe(2);
  });

  it('키워드 파라미터가 제공될 때 키워드를 포함하는 음료를 필터링해야 함', async () => {
    const results = await searchDrink({ keyword: '주스' });
    expect(results).toHaveLength(6);
  });

  it('키워드를 정확히 필터링해야 함', async () => {
    const results = await searchDrink({ keyword: '포도' });
    expect(results).toHaveLength(1);
    expect(results[0].name).toBe('포도 주스');
  });

  it('type이 MAX_COUNT일 때 가장 많은 수량의 음료를 반환해야 함', async () => {
    const results = await searchDrink({ type: 'MAX_COUNT' });
    expect(results).toHaveLength(1);
    expect(results[0].count).toBe(12);
  });

  it('type이 MIN_COUNT일 때 가장 적은 수량의 음료를 반환해야 함', async () => {
    const results = await searchDrink({ type: 'MIN_COUNT' });
    expect(results).toHaveLength(1);
    expect(results[0].count).toBe(0);
  });

  it('ids와 키워드를 함께 필터링할 수 있어야 함', async () => {
    const results = await searchDrink({ ids: [1, 2, 3, 4], keyword: '주스' });
    expect(results).toHaveLength(4);
  });

  it('ids와 type을 함께 필터링할 수 있어야 함', async () => {
    const results = await searchDrink({ ids: [1, 2, 3, 4], type: 'MAX_COUNT' });
    expect(results).toHaveLength(1);
    expect(results[0].count).toBe(12);
  });

  it('키워드와 type을 함께 필터링할 수 있어야 함', async () => {
    const results = await searchDrink({ keyword: '주스', type: 'MIN_COUNT' });
    expect(results).toHaveLength(1);
    expect(results[0].count).toBe(0);
  });
});
