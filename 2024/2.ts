function createFrame(names: string[]): string {
  const longestLength = Math.max(...(names.map(el => el.length)));
  const border = '*'.repeat(longestLength + 4);
  const content = names.reduce((acc, curr) => {
    return acc + `* ${curr}${' '.repeat(longestLength - curr.length)} *\n`
  }, '')
  return `${border}\n${content}${border}`
}


// The below was my original version that didn't score very well. I have never really had a practical use for the repeat function, hence all the loops.

// function createFrame(names: string[]): string {
//     let longest = "";
  
//     names.forEach((name) => {
//       if(name.length > longest.length) longest = name
//     })
  
//     const decoratedNames = names.map((name) => {
//       const currentNameLength = name.length
//       let stringOfSameLength = `${name}`;
      
//       // Add spaces
//       for (let i = currentNameLength; i < longest.length; i++) {
//         stringOfSameLength = `${stringOfSameLength} `
//       };
  
//       return `* ${stringOfSameLength} *`
//     })
  
//     let borderDecoration = ``;
//     for (let i = 0; i < longest.length + 4; i++){
//       borderDecoration = `${borderDecoration}*`
//     }
  
    
//     const allLines = [borderDecoration, ...decoratedNames, borderDecoration];
  
//     let finalString = '';
//     allLines.forEach((line, index) => {
//       finalString += `${line}`
//       if(index !== allLines.length - 1){
//         finalString += `\n`
//       }
//     })
  
//     return finalString
//   }