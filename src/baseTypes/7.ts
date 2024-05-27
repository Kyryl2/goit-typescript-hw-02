enum Days {
  Mon,
  Tue,
  Wed,
  Thu,
  Fri,
  Sat = 1,
  Sun = 1,
}

const isWeekend = (day: string): boolean => {
  if (Days[day]) {
    return true;
  }
  return false;
};
