const union = (...sets) => {
  if (sets.length === 1) {
    const [uniqueList] = sets;
    return uniqueList;
  }

  const resultList = [];
  sets.forEach((set) => {
    set.forEach((element) => {
      if (!resultList.includes(element)) {
        resultList.push(element);
      }
    });
  });

  return resultList;
};

export default union;
