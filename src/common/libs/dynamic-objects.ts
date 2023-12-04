export const createDynamicObject = (
  keys: Record<string, unknown>,
  values?: string,
) => {
  const obj: Record<string, string> = {};

  if (keys instanceof Object) {
    Object.entries(keys).forEach(([key, value]) => {
      obj[key] = values ?? (value as string);
    });
  }

  return obj;
};
