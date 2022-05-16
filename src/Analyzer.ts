import { MatchType } from "./types/MatchType";
import { MatchResult } from "./enums/MatchResult";

const { HomeWin, AwayWin } = MatchResult;

export interface Analyzer<T> {
  run(rows: T[]): string;
}

export class WinsAnalyzer implements Analyzer<MatchType> {
  constructor(public team: string) {}

  run(matches: MatchType[]): string {
    let wins = 0;

    for (let match of matches) {
      if (
        match[2] === this.team &&
        (match[5] === HomeWin || match[5] === AwayWin)
      )
        wins++;
    }

    return `${this.team} won ${wins} times`;
  }
}
