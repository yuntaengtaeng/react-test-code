import buildQueryString from './buildQueryString';

describe('buildQueryString', () => {
  it('should convert a flat object to a query string', () => {
    const params = {
      name: 'John',
      age: 30,
      active: true,
    };
    const result = buildQueryString(params);
    expect(result).toBe('name=John&age=30&active=true');
  });

  it('should handle nested objects by prefixing keys', () => {
    const params = {
      user: {
        name: 'John',
        age: 30,
      },
    };
    const result = buildQueryString(params);
    expect(result).toBe('user[name]=John&user[age]=30');
  });

  it('should handle array values by repeating the key', () => {
    const params = {
      ids: [1, 2, 3],
    };
    const result = buildQueryString(params);
    expect(result).toBe('ids[0]=1&ids[1]=2&ids[2]=3');
  });
});
