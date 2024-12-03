function prepareGifts(gifts: number[]): number[] {
  const uniques = Array.from(new Set(gifts));
  const sortedArray = uniques.sort((a, b) => a - b);
  return sortedArray;
}

// Notes: uniques.sort on its own does not work, as it will convert the numbers
// to strings first. Meaning if you pass prepareGifts([2,3,5,11,12]) it will put
// 11 and 12 before the other numbers (as they start with '1')
