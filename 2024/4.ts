function createXmasTree(height: number, ornament: string) {
    const maxLength = 1 + ((height - 1) * 2);
    let filler = ``;
  
    let treeLines = ``
    let currentWhitespaceCharacter = "_".repeat((maxLength - 1) / 2);
  
    const treeStump = `${currentWhitespaceCharacter}#${currentWhitespaceCharacter}\n${currentWhitespaceCharacter}#${currentWhitespaceCharacter}`
  
    for(let i = 0; i < height; i++) {
      const diff = maxLength - (currentWhitespaceCharacter.length * 2);
      const currentOrnamentLine = `${ornament}`.repeat(diff);
      const currentLine = `${currentWhitespaceCharacter}${currentOrnamentLine}${currentWhitespaceCharacter}\n`;
      treeLines += currentLine
      currentWhitespaceCharacter = currentWhitespaceCharacter.substring(1);
    }
  
    return `${treeLines}${treeStump}`
  }

  //4 stars