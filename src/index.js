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

// @flow

function dottedGet(obj: { string: any } | any, spec: string) {
  if (spec === "") {
    return obj;
  }
  const dot = spec.indexOf(".");
  const next = dot === -1 ? "" : spec.substring(dot + 1, spec.length);
  const part = dot === -1 ? spec : spec.substr(0, dot);
  return dottedGet(obj[part], next);
}

function map2array(objs: any[], spec: string[]) {
  return objs.map(v => spec.map(k => dottedGet(v, k)));
}

module.exports = {
  dottedGet,
  map2array
};