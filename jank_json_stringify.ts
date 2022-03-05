function jankSONStringify(obj: object): string {
  if (obj === null) {
    return 'null';
  } else if (obj === undefined) {
    return 'undefined';
  } else if (typeof obj === 'number') {
    return `${obj}`;
  } else if (typeof obj === 'string') {
    return `'${obj}'`;
    // TODO: arrays
  } else {
    // Assuming all other base cases are handled, this is always an obj body.
    const keyVals = Object.entries(obj)
      .map(([key, value]) => `'${key}': ${jankSONStringify(value)}`).join(',');
    return `{${keyVals}}`
  }
}

const input = {'a': {'deepObjVal': 2}, 'b': 3};
console.assert(jankSONStringify(input)
  === `{'a': {'deepObjVal': 2}, 'b': 3}`, jankSONStringify(input));