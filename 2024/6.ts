function inBox(box: string[]): boolean {
    const linesWithPotential = box.filter((line, index) => {
      const asteriskPosition = line.indexOf('*');
      return asteriskPosition > 0 && asteriskPosition < line.length - 1 && index !== 0 &&  index !== box.length -1;
      });
  
  
    const validLineRegex =  /^#+.*\*.*#$/
    let presentIsValid = false;
    for (let i = 0; i < linesWithPotential.length; i++) {
      const isValid = validLineRegex.test(linesWithPotential[i])
      if(isValid){
        presentIsValid = isValid
        break;
      }
    }
  
    return presentIsValid
  }

  // 2 stars, I will see if I can clean this up 