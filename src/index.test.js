/*
Copyright (c) 2017 Holvonix LLC and the json2array AUTHORS

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

const map2array = require("./index");

test("it gets a top-level property", () => {
  expect(map2array([{ a: "b", c: 1 }], ["a"])).toEqual([["b"]]);
});

test("it gets a top-level property from many objects", () => {
  expect(map2array([{ a: "b", c: 1 }, { a: "dd", c: 1 }], ["a"])).toEqual([
    ["b"],
    ["dd"]
  ]);
});
