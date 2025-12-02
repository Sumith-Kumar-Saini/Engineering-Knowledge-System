import { hello } from "./index";

test("hello works", () => {
  expect(hello()).toBe("Hello from utils!");
});
