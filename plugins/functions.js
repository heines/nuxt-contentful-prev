export default ({ $dateFns }, inject) => {
  const periodDate = (obj, isBlank = Boolean) => {
    let blank = '';
    if (isBlank) blank = ' ';
    const startY = $dateFns.format(obj.start_date, 'yyyy');
    const endY = $dateFns.format(obj.end_date, 'yyyy');
    const startDate = $dateFns.format(obj.start_date, 'M.d');
    const endDate = $dateFns.format(obj.end_date, 'M.d');
    if (startY === endY) {
      return `${startY}.${startDate}${blank}-${blank}${endDate}`;
    } else {
      return `${startY}.${startDate}${blank}-${blank}${endY}.${endDate}`;
    }
  };
  inject('period', periodDate);
};
