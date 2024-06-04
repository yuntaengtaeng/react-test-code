type Params = {
  [key: string]:
    | string
    | number
    | number[]
    | boolean
    | null
    | undefined
    | Params
    | Params[];
};

const buildQueryString = (params: Params, prefix = ''): string => {
  const queryParts: string[] = [];

  Object.keys(params).forEach((key) => {
    const fullKey = prefix ? `${prefix}[${key}]` : key;
    const value = params[key];

    if (value && typeof value === 'object' && !Array.isArray(value)) {
      queryParts.push(buildQueryString(value, fullKey));
    } else if (Array.isArray(value)) {
      value.forEach((item, index) => {
        const arrayKey = `${fullKey}[${index}]`;
        if (item && typeof item === 'object') {
          queryParts.push(buildQueryString(item, arrayKey));
        } else {
          queryParts.push(`${arrayKey}=${String(item)}`);
        }
      });
    } else {
      queryParts.push(`${fullKey}=${String(value)}`);
    }
  });

  return queryParts.join('&');
};

export default buildQueryString;
