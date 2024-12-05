type Shoe = {
  type: "I" | "R";
  size: number;
};

type ShoeTypePerSize = { [k: string]: { I: number; R: number } };

function organizeShoes(shoes: Shoe[]): number[] {
  let shoeTypePerSize: ShoeTypePerSize = {};

  shoes.forEach((shoe) => {
    if (!shoeTypePerSize[shoe.size]) {
      shoeTypePerSize[shoe.size] = {
        I: 0,
        R: 0,
      };
    }

    shoeTypePerSize[shoe.size][shoe.type] += 1;
  });

  let finalPairs: Array<number> = [];

  for (const [size, shoes] of Object.entries(shoeTypePerSize)) {
    const amountPairs = Math.min(shoes.I, shoes.R);
    for (let i = 0; i < amountPairs; i++) finalPairs.push(Number(size));
  }

  return finalPairs;
}

// 3 stars, so could use some improvement. Also not a huge fan fo casting size
// ot a number in this typing, as this string isn't guaranteed to be a number.
