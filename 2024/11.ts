//This one was very easy.
function decodeFilename(filename: string): string {
  return filename.replace(/\d+_/, "").match(/[a-zA-Z\d-_]+.{1}[a-zA-Z]+/)[0];
}
