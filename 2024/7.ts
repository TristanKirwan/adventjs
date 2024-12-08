// This answer does not pass all the tests, unfortuntely, the tests that it has
// failed are secret so I might have to come back to this one.

function fixPackages(packages: string): string {
  const regex = /\(.*\)/;

  function test(string: string): string {
    const stringWithoutBrackets = string.substring(1, string.length - 1);
    const matches = stringWithoutBrackets.match(regex);
    if (!matches) {
      console.log(
        "returning testybesty",
        stringWithoutBrackets.split("").reverse().join("")
      );
      return stringWithoutBrackets.split("").reverse().join("");
    }
    return stringWithoutBrackets
      .replace(matches[0], test(matches[0]))
      .split("")
      .reverse()
      .join("");
  }

  const matches = packages.match(regex);

  if (matches && matches.length > 0) {
    const replacement = test(matches[0]);
    // console.log(replacement)

    return packages.replace(matches[0], replacement);
  }

  return packages;
}
