type ParseYearFromDateType = (date: string) => string;

export const parseYearFromDate: ParseYearFromDateType = (date) => {
  return (date && date.split("-")[0]) || "No date";
};
