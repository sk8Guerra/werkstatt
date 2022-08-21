import map from '../array/map';
import join from '../array/join';

const slugify = (value) => {
  const regex = /[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g;
  const wordsMatched = value.match(regex);
  if (wordsMatched) {
    const transform = (x) => x.toLowerCase();
    return join(map(wordsMatched, transform), '-');
  }

  return '';
};

export default slugify;
