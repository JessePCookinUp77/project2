import { test } from "node:test";
import assert from "node:assert";
import sum from "./index.js";

test("Mengembalikan penjumlahan dua angka positif", () => {
  assert.strictEqual(sum(2, 3), 5);
});
test("Mengembalikan 0 jika kedua angka negatif", () => {
  assert.strictEqual(sum(-2, -3), 0);
});
test("Mengembalikan 0 jika salah satu atau kedua input bukan angka", () => {
  assert.strictEqual(sum("2", 3), 0);
  assert.strictEqual(sum(2, "3"), 0);
  assert.strictEqual(sum(undefined, 3), 0);
  assert.strictEqual(sum(2, null), 0);
});
test("Mengembalikan hasil jika salah satu input adalah 0", () => {
  assert.strictEqual(sum(0, 5), 5);
  assert.strictEqual(sum(5, 0), 5);
});
