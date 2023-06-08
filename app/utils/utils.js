export const increaseIndex = (index, array) => {
  if (index === array.length - 1) {
    return 0;
  }
  return index + 1;
};

export const decreaseIndex = (index, array) => {
  if (index === 0) {
    return array.length - 1;
  }
  return index - 1;
};
