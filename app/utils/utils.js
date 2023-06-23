export const increaseIndex = (index, arrayLength) => {
  if (index === arrayLength - 1) {
    return 0;
  }
  return index + 1;
};

export const decreaseIndex = (index, arrayLength) => {
  if (index === 0) {
    return arrayLength - 1;
  }
  return index - 1;
};
