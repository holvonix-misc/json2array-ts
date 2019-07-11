import * as assert from 'assert';
import * as json2array from '../src/index';

describe('dottedGet', () => {
  it('gets the object', () => {
    assert.deepStrictEqual(json2array.dottedGet({ a: 'b', c: 1 }, ''), {
      a: 'b',
      c: 1,
    });
  });

  it('gets a top-level property', () => {
    assert.deepStrictEqual(json2array.dottedGet({ a: 'b', c: 1 }, 'a'), 'b');
    assert.deepStrictEqual(json2array.dottedGet({ a: 'b', c: 1 }, 'a.'), 'b');
    assert.deepStrictEqual(json2array.dottedGet({ a: 'b', c: 1 }, 'c'), 1);
    assert.deepStrictEqual(
      json2array.dottedGet({ a: 'b', c: 1, d: { z: 'b', c: 1 } }, 'd'),
      { z: 'b', c: 1 }
    );
  });

  it('gets a second-level property', () => {
    assert.deepStrictEqual(
      json2array.dottedGet({ a: 'b', c: 1, d: { z: 'b', c: 1 } }, 'd.z'),
      'b'
    );
    assert.deepStrictEqual(
      json2array.dottedGet({ a: 'b', c: 1, d: { z: 'b', c: 1 } }, 'd.z.'),
      'b'
    );
    assert.deepStrictEqual(
      json2array.dottedGet({ a: 'b', c: 1, d: { z: 'b', c: 1 } }, 'd.c.'),
      1
    );
  });
});

describe('map2array', () => {
  it('gets a top-level property', () => {
    assert.deepStrictEqual(json2array.map2array({ a: 'b', c: 1 }, ['a']), [
      'b',
    ]);
  });

  it('gets many deep properties', () => {
    assert.deepStrictEqual(
      json2array.map2array(
        { a: 'b3ioj3ior', c: 1, d: { z: 'bmf mf', c: { z: 'b', c: 1 } } },
        ['a', 'd.z', 'd.c.z', 'd.c', 'c']
      ),
      ['b3ioj3ior', 'bmf mf', 'b', { z: 'b', c: 1 }, 1]
    );
  });
});

describe('maps2arrays', () => {
  it('maps2arrays gets a top-level property', () => {
    assert.deepStrictEqual(json2array.maps2arrays([{ a: 'b', c: 1 }], ['a']), [
      ['b'],
    ]);
  });

  it('maps2arrays gets a top-level property from many objects', () => {
    assert.deepStrictEqual(
      json2array.maps2arrays([{ a: 'b', c: 1 }, { a: 'dd', c: 1 }], ['a']),
      [['b'], ['dd']]
    );
  });

  it('maps2arrays gets many deep properties from many objects', () => {
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
  });
});
