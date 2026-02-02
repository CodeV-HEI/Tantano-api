export const filterIfNotNull = (key: string, value: any) => (!value ? {} : { [key]: value });
