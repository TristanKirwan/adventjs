function drawRace(indices: number[], length: number): string {
  const tracksWithDeer = indices.map((position, reindeerIndex) => {
    const reindeerPos =
      position === 0
        ? null
        : position > 0
        ? position
        : length - Math.abs(position);
    let track = `~`.repeat(length);
    if (reindeerPos) {
      track =
        track.substring(0, reindeerPos) +
        "r" +
        track.substring(reindeerPos + 1);
    }
    track =
      ` `.repeat(indices.length - 1 - reindeerIndex) +
      track +
      ` /${reindeerIndex + 1}`;
    return track;
  });

  return tracksWithDeer.join("\n");
}

//This initial version got 3 stars.
