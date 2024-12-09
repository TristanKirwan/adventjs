type Space = "·" | "@" | "*" | "o";
type Board = Space[];
type Movement = "U" | "D" | "R" | "L";
type Result = "none" | "crash" | "eat";

function moveTrain(board: Board, mov: Movement): Result {
  const boardIndex = board.findIndex((val) => val.includes("@"));
  const stringIndex = board[boardIndex]
    .split("")
    .findIndex((val) => val === "@");

  const trackIndexToLookAt =
    mov === "D" ? boardIndex + 1 : mov === "U" ? boardIndex - 1 : boardIndex;
  const stringIndexToLookAt =
    mov === "R" ? stringIndex + 1 : mov === "L" ? stringIndex - 1 : stringIndex;

  return !board?.[trackIndexToLookAt]?.[stringIndexToLookAt] ||
    board?.[trackIndexToLookAt]?.[stringIndexToLookAt] === "o"
    ? "crash"
    : board?.[trackIndexToLookAt]?.[stringIndexToLookAt] === "*"
    ? "eat"
    : "none";
}

// This scored 1 star, which is kind of sad. Not sure how to improve, I tried
// writing some of the most disgusting code I could imagine (see below) but it
// fails a secret test.. (and I would hope that the score isnt any better)

// type Space = '·' | '@' | '*' | 'o'
// type Board = Space[]
// type Movement = 'U' | 'D' | 'R' | 'L'
// type Result = 'none' | 'crash' | 'eat'

// function moveTrain(board: Board, mov: Movement): Result {
//   const fullAsString = board.join('')
//   const indexInFullString = fullAsString.split('').findIndex((item) => item === '@');
//   const rowModifier = mov === 'D' ? 1 : mov === 'U' ? -1 : 0;
//   const colModifier = mov === 'R' ? 1 : mov === 'L' ? -1 : 0;
//   const finalDestination = indexInFullString + ((fullAsString.length / board.length) * rowModifier) + colModifier;

//   console.log((finalDestination  + 1) % (fullAsString.length / board.length))
//   return ((finalDestination  + 1) % (fullAsString.length / board.length) === 0 || finalDestination < 0 || finalDestination > fullAsString.length || fullAsString[finalDestination] === 'o') ? 'crash' : fullAsString[finalDestination] === '*' ? 'eat' : 'none'
// }
