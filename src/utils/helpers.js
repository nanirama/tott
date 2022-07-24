export const splitArray = (list) => {
  const middleIndex = Math.ceil(list.length / 2);

  const firstHalf = list.splice(0, middleIndex);
  const secondHalf = list.splice(-middleIndex);
  return [firstHalf.length, secondHalf.length];
};
