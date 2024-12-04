import { test } from "node:test";
import assert from "node:assert";
import { sum } from "./index.js";

test("sum adds two numbers correctly", () => {
  assert.strictEqual(sum(2, 3), 5); // 2 + 3 = 5
});

test("sum works with negative numbers", () => {
  assert.strictEqual(sum(-2, -3), -5); // -2 + -3 = -5
});

test("sum works with zero", () => {
  assert.strictEqual(sum(0, 5), 5); // 0 + 5 = 5
});
