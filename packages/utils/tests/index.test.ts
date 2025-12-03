import { hello } from "../src/index";

test("hello works", () => {
  expect(hello()).toBe("Hello from utils!");
});
