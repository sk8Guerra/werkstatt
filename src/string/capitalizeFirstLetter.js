function capitalizeFirstLetter(value) {
  if (typeof value !== 'string') return '';
  return value.charAt(0).toUpperCase() + value.slice(1);
};

module.exports = { capitalizeFirstLetter };
