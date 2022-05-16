export const parseDateFromString = (stringDate: string): Date => {
  const dateArray = stringDate.split("/").map((item) => parseInt(item));

  return new Date(dateArray[2], dateArray[1] - 1, dateArray[0]);
};
