# json2array - 

[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](./LICENSE) ![npm](https://img.shields.io/npm/v/json2array.svg) [![Build Status](https://travis-ci.com/holvonix-open/json2array-ts.svg?branch=master)](https://travis-ci.com/holvonix-open/json2array-ts) [![GitHub last commit](https://img.shields.io/github/last-commit/holvonix-open/json2array-ts.svg)](https://github.com/holvonix-open/json2array-ts/commits) [![codecov](https://codecov.io/gh/holvonix-open/json2array-ts/branch/master/graph/badge.svg)](https://codecov.io/gh/holvonix-open/json2array-ts) [![Dependabot Status](https://api.dependabot.com/badges/status?host=github&repo=holvonix-open/json2array-ts)](https://dependabot.com) [![DeepScan grade](https://deepscan.io/api/teams/4465/projects/6282/branches/52048/badge/grade.svg)](https://deepscan.io/dashboard#view=project&tid=4465&pid=6282&bid=52048) [![Code Style: Google](https://img.shields.io/badge/code%20style-google-blueviolet.svg)](https://github.com/google/gts)


## Quick Start

After `yarn add json2array':

````typescript
import * as assert from 'assert';
import * as json2array from 'json2array';

// Get many properties from many objects.
assert.deepStrictEqual(
  json2array.maps2arrays(
    [
      { a: 'b3ioj3ior', c: 1, d: { z: 'bmf mf', c: { z: 'b', c: 1 } } },
      { a: 'b', c: 'b94', d: { z: 'bz', c: { z: 'fkmef', c: 91 } } },
      { a: 'bij4', c: 293, d: { z: 'b3', c: { z: '39', c: 13 } } },
    ],
    ['a', 'd.z', 'd.c.z', 'd.c', 'c']
  ),
  [
    ['b3ioj3ior', 'bmf mf', 'b', { z: 'b', c: 1 }, 1],
    ['b', 'bz', 'fkmef', { z: 'fkmef', c: 91 }, 'b94'],
    ['bij4', 'b3', '39', { z: '39', c: 13 }, 293],
  ]
);
````


## License

Read the [LICENSE](LICENSE) for details.  
The entire [NOTICE](NOTICE) file serves as the NOTICE that must be included under
Section 4d of the License.

````

# json2array

This product contains software originally developed by Holvonix LLC.
Original Repository: https://github.com/holvonix-open/json2array-ts

Copyright (c) 2017-2019 Holvonix LLC. All rights reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this software except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

Third-party dependencies may have their own licenses.

````
