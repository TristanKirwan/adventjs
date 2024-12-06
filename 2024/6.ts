
function inBox(box: string[]): boolean {
    const boxContent = box.slice(1, -1);
    const validLineRegex =  /^#+.*\*.*#$/
    return boxContent.filter((line) => validLineRegex.test(line)).find((el) => el) !== undefined
}


// The commented below code was my initial try, which resulted in 2/5 stars. I think I had the most important parts of the question down and reduced code necessary and the above is 5/5 stars.



// function inBox(box: string[]): boolean {
//     const linesWithPotential = box.filter((line, index) => {
//       const asteriskPosition = line.indexOf('*');
//       return asteriskPosition > 0 && asteriskPosition < line.length - 1 && index !== 0 &&  index !== box.length -1;
//       });
  
  
//     const validLineRegex =  /^#+.*\*.*#$/
//     let presentIsValid = false;
//     for (let i = 0; i < linesWithPotential.length; i++) {
//       const isValid = validLineRegex.test(linesWithPotential[i])
//       if(isValid){
//         presentIsValid = isValid
//         break;
//       }
//     }
  
//     return presentIsValid
//   }