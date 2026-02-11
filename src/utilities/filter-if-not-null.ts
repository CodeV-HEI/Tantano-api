export const filterIfNotNull = (key: string, value: any, map?: (value: any) => any) => (!value ? {} : { [key]: map ? map(value) : value });

export const filterIfNotNullDate = (key: string, value: any) => filterIfNotNull(key, value, (date) => new Date(date));
export const filterIfNotNullNumber = (key: string, value: any) => filterIfNotNull(key, value, (value) => +value);
