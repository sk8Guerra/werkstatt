import isLengthOf from './isLengthOf';
import lengthOf from './lengthOf';

const intersection = (...sets) => {
  if (sets.length === 0) return [];
  if (sets.length === 1) {
    const [uniqueList] = sets;
    return uniqueList;
  }

  const resultList = [];
  const [firstSet, ...remainingSets] = sets;
  const remainingSetsLength = lengthOf(remainingSets);
  const setsJoined = remainingSets.flat();

  firstSet.forEach((element) => {
    const elementsFiltered = setsJoined.filter((value) => value === element);
    if (isLengthOf(elementsFiltered, remainingSetsLength)) {
      resultList.push(element);
    }
  });

  return resultList;
};

export default intersection;
