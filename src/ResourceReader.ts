import { readFileSync } from "node:fs";

export interface Reader {
  read(): string[][];
}

export class CsvFileReader implements Reader {
  constructor(public filename: string) {}

  read(): string[][] {
    const rowsData = readFileSync(this.filename, { encoding: "utf-8" });

    return rowsData.split("\n").map((row) => {
      return row.split(",");
    });
  }
}
