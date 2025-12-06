type ExtractedFnc = (idx?: number | undefined) => [string | null, number];

// -- White spaces " ", "\t", "\n", "\r", "\v", "\f", "\b"
const WHITESPACE = [32, 9, 10, 13, 11, 12, 8];

const TOKENS = {
  LeftCurlyBrace: 123,
  RightCurlyBrace: 125,
  LeftSquareBracket: 91,
  RightSquareBracket: 93,
  Colon: 44,
  Comma: 34,
};

function safeParse(rawInput: string) {
  const input = rawInput.trim();
  if (!input) return "";
  const extStr = extractString(input);
  for (let i = 0; i < input.length; i++) {
    const currentStr = extStr();
  }
}

function parseObject(inputFnc: ExtractedFnc, index: number) {}

function extractString(str: string): ExtractedFnc {
  let index = 0;
  return (idx?: number) =>
    idx ? [str.charAt(idx) || null, idx] : [str.charAt(index) || null, index++];
}

function Literals(inputFnc: ExtractedFnc, index: number) {
  const [currentStr] = inputFnc(index);
  if (currentStr === null) return null;
  if (currentStr === '"') return "string";
  if (isNumber(currentStr)) return "number";
  if (currentStr === "t" || currentStr === "f") return "boolean"; // it needs to run a function which check the boolean value
}

// testing new things to build this function
// function Literals(inputFnc: ExtractedFnc, index: number) {
//   const [currentStr] = inputFnc(index);
//   if (currentStr === null) return null;
//   if (currentStr === '"') return "string";
//   if (isNumber(currentStr)) return "number";
//   if (currentStr === "t" || currentStr === "f") return "boolean"; // it needs to run a function which check the boolean value
// }

function isNumber(str: string) {
  if (str.length === 0) return false;
  const firstChar = str.charAt(0);
  return !isNaN(parseInt(firstChar));
}
