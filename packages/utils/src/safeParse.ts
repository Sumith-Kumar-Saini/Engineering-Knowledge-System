type TokenType =
  | "{"
  | "}"
  | "["
  | "]"
  | ":"
  | ","
  | "STRING"
  | "NUMBER"
  | "TRUE"
  | "FALSE"
  | "NULL"
  | "EOF";

interface Token {
  type: TokenType;
  value?: string | number | null; // for STRING and NUMBER and maybe literals
  index: number; // starting index in source (useful for errors)
  length: number; // length of text consumed
}

const WhiteSpace = [];
(() => {
  [32, 9, 10, 13, 11, 12, 8].forEach((val) => (WhiteSpace[val] = true));
})();

function tokenize(input: string): Token[] {
  let index = 0;
}

function readString(input: string, idx: number): Token {
  const start = idx;
  idx++;
  let out = "";
  while (idx < input.length) {
    const ch = input[idx++];
    if (ch === '"')
      return { type: "STRING", value: out, index: start, length: idx - start };
    if (ch === "\\") idx += 2;
    else out += ch;
  }
  throw new Error(`Unterminated string at index ${start}`);
}

function readNumber(input: string, idx: number): Token {
  const start = idx;
  if (input[idx] === "-") idx++;
  if (input[idx] === "0") {
    idx++;
  } else {
    if (!isDigit1to9(input[idx])) throw Error("...");
    while (isDigit(input[idx])) idx++;
  }
  if (input[idx] === ".") {
    idx++;
    if (!isDigit(input[idx])) throw Error("...");
    while (isDigit(input[idx])) idx++;
  }
  if (input[idx] === "e" || input[idx] === "E") {
    idx++;
    if (input[idx] === "+" || input[idx] === "-") idx++;
    if (!isDigit(input[idx])) throw error;
    while (isDigit(input[idx])) idx++;
  }
  const raw = input.substring(start, idx);
  return {
    type: "NUMBER",
    value: Number(raw),
    index: start,
    length: idx - start,
  };
}

