function compile(instructions: string[]): number {
  const registries = {};
  let i = 0;
  while (i < instructions.length) {
    const [instruction, xVal, yVal] = instructions[i].split(" ");

    switch (instruction) {
      case "MOV":
        registries[yVal] = Number(xVal) || registries[xVal] || 0;
        break;
      case "INC":
        registries[xVal] = (registries[xVal] || 0) + 1;
        break;
      case "JMP":
        if (registries[xVal] === 0) {
          i = Number(yVal) - 1;
        }
        break;
      case "DEC":
        registries[xVal] = (registries[xVal] || 0) - 1;
        break;
    }
    i++;
  }

  return registries["A"];
}

//This gives the answer I am expecting and seems to run fine in the TS playground, but the adventJS seems to complain about execution time at the moment.
