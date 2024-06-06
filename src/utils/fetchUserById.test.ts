import fetchUserById from './fetchUserById';

describe('fetchUserById', () => {
  it('존재하는 User를 찾는 경우', async () => {
    const result = await fetchUserById(1);
    expect(result).toEqual({
      id: 1,
      name: 'john',
      age: 21,
    });
  });

  it('존재하지 않는 User를 찾는 경우', async () => {
    await expect(fetchUserById(5)).rejects.toBe('Not Found User');
  });
});
