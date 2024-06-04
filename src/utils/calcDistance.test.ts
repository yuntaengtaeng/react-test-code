import calcDistance from './calcDistance';

describe('calcDistance', () => {
  it('should calculate the distance between two points correctly', () => {
    const lat1 = 37.7749; // San Francisco
    const lon1 = -122.4194;
    const lat2 = 34.0522; // Los Angeles
    const lon2 = -118.2437;

    const distance = calcDistance(lat1, lon1, lat2, lon2);

    // 실제 거리는 약 559km
    expect(distance).toBeCloseTo(559, 0);
  });

  it('should return 0 when the two points are the same', () => {
    const lat = 37.7749;
    const lon = -122.4194;

    const distance = calcDistance(lat, lon, lat, lon);

    expect(distance).toBe(0);
  });

  it('should handle points on the equator correctly', () => {
    const lat1 = 0;
    const lon1 = 0;
    const lat2 = 0;
    const lon2 = 90;

    const distance = calcDistance(lat1, lon1, lat2, lon2);

    // 적도상에서 90도 차이는 약 10,007km
    expect(Math.round(distance)).toBe(10008);
  });
});
