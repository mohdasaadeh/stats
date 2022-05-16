import { MatchResult } from "./enums/MatchResult";
import { MatchReader } from "./MatchReader";

const { HomeWin, AwayWin } = MatchResult;

const matchReader = new MatchReader("football.csv");

matchReader.read();

let wins = 0;

for (let match of matchReader.rows) {
  if (
    match[2] === "Man United" &&
    (match[5] === HomeWin || match[5] === AwayWin)
  )
    wins++;
}

console.log(`Man United won ${wins} times`);
