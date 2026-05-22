import { test } from "node:test";
import assert from "node:assert/strict";
import { greet, resolveName } from "./greet.js";

test("greets a named person", () => {
  assert.equal(greet("Eddy"), "Hello, Eddy! 👋");
});

test("defaults to a plain hello", () => {
  assert.equal(greet("world"), "Hello, world! 👋");
});

test("--shout uppercases the greeting", () => {
  assert.equal(greet("Eddy", true), "HELLO, EDDY! 👋");
});

test("resolveName picks the first non-flag argument", () => {
  assert.equal(resolveName(["--shout", "Eddy"]), "Eddy");
});

test("resolveName defaults to world when only flags are passed", () => {
  assert.equal(resolveName(["--shout"]), "world");
});
