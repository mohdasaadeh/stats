export interface Reporter {
  print(wins: string): void;
}

export class ConsoleReporter implements Reporter {
  print(report: string): void {
    console.log(report);
  }
}
