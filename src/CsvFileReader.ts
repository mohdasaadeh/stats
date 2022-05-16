import { readFileSync } from "node:fs";

export abstract class CsvFileReader<T> {
  rows: T[] = [];

  constructor(public filename: string) {}

  abstract load(row: string[]): T;

  read(): void {
    const rowsData = readFileSync(this.filename, { encoding: "utf-8" });

    this.rows = rowsData
      .split("\n")
      .map((row) => {
        return row.split(",");
      })
      .map(this.load);
  }
}
