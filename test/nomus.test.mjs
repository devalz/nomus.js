import test from "node:test";
import assert from "node:assert/strict";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const nomus = require("../dist/cjs/index.js");

test("detects common naming styles", () => {
  assert.equal(nomus.detectNamingStyle("userVotesDetails"), "camelCase");
  assert.equal(nomus.detectNamingStyle("UserVotesDetails"), "PascalCase");
  assert.equal(nomus.detectNamingStyle("user_votes_details"), "snake_case");
  assert.equal(nomus.detectNamingStyle("HELLO-WORLD"), "UPPER-KEBAB-CASE");
});

test("converts inputs across formats", () => {
  assert.equal(nomus.toPascalCase("user_votes_details"), "UserVotesDetails");
  assert.equal(nomus.toCamelCase("UserVotesDetails"), "userVotesDetails");
  assert.equal(nomus.toSnakeCase("helloWorldTest"), "hello_world_test");
  assert.equal(nomus.toTrainCase("hello world test"), "Hello-World-Test");
});

test("exposes the static Naming API", () => {
  assert.equal(nomus.Naming.toKebabCase("HelloWorld"), "hello-world");
  assert.equal(nomus.Naming.toTitleCase("hello-world"), "Hello World");
});
