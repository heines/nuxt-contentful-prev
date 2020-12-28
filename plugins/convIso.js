export default ({ $dateFns }, inject) => {
  const isoDate = (date) => $dateFns.parseISO(date);
  inject('convIso', isoDate);
};
