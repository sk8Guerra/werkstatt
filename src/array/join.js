const join = (array, simbol = '') => {
  if (array) {
    return array.join(simbol);
  }

  return '';
};

export default join;
