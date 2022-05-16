import { CsvFileReader } from "./ResourceReader";
import { MatchReader } from "./MatchReader";
import { MatchSummary } from "./MatchSummary";
import { WinsAnalyzer } from "./Analyzer";
import { ConsoleReporter } from "./Reporter";

const matchReader = new MatchReader(new CsvFileReader("football.csv"));

matchReader.load();

const matchSummary = new MatchSummary(
  new WinsAnalyzer("Man City"),
  new ConsoleReporter()
);

matchSummary.finalize(matchReader.matches);
