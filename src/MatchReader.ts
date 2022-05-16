import { Reader } from "./ResourceReader";
import { MatchType } from "./types/MatchType";
import { MatchResult } from "./enums/MatchResult";
import { parseDateFromString } from "./utils";

export class MatchReader {
  matches: MatchType[] = [];

  constructor(public reader: Reader) {}

  load(): void {
    this.matches = this.reader.read().map((match) => {
      return [
        parseDateFromString(match[0]),
        match[1],
        match[2],
        parseInt(match[3]),
        parseInt(match[4]),
        match[5] as MatchResult,
        match[6],
      ];
    });
  }
}
