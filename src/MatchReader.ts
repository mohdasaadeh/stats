import { CsvFileReader } from "./CsvFileReader";
import { MatchType } from "./types/MatchType";
import { MatchResult } from "./enums/MatchResult";
import { parseDateFromString } from "./utils";

export class MatchReader extends CsvFileReader<MatchType> {
  load(match: string[]): MatchType {
    return [
      parseDateFromString(match[0]),
      match[1],
      match[2],
      parseInt(match[3]),
      parseInt(match[4]),
      match[5] as MatchResult,
      match[6],
    ];
  }
}
