const uniqueArray = <T>(array: T[]): T[] => {
  return Array.from(new Set(array));
};

export default uniqueArray;
