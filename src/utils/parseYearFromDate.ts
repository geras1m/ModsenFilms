type ParseYearFromDateType = (date: string) => string;

export const parseYearFromDate: ParseYearFromDateType = (date) => {
  return date.split("-")[0];
};
