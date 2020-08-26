export const sortAsc = <T>(data: T[], key: keyof T): T[] =>
  data.sort((a: T, b: T) => (a[key] > b[key] ? 1 : -1));

export const sortDesc = <T>(data: T[], key: keyof T): T[] =>
  data.sort((a: T, b: T) => (a[key] > b[key] ? -1 : 1));

export const shuffle = (data: any[]): any[] =>
  data.sort(() => Math.random() - 0.5);
