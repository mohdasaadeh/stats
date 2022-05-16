import { Analyzer } from "./Analyzer";
import { Reporter } from "./Reporter";
import { MatchType } from "./types/MatchType";

export class MatchSummary {
  constructor(
    public analyzer: Analyzer<MatchType>,
    public reporter: Reporter
  ) {}

  finalize(matches: MatchType[]): void {
    const report = this.analyzer.run(matches);

    this.reporter.print(report);
  }
}
