export function jankSONStringify(obj: object): string {
  if (obj === null) {
    return 'null';
  } else if (obj === undefined) {
    return 'undefined';
  } else if (typeof obj === 'number') {
    // number and string are the only primitives for now
    return `${obj}`;
  } else if (typeof obj === 'string') {
    return `'${obj}'`;
  } else if (Array.isArray(obj)) {
    return `[${obj.map(val => jankSONStringify(val)).join(', ')}]`;
  } else {
    // Assuming all other base cases are handled, this is always an obj body.
    const keyVals = Object.entries(obj)
      .map(([key, value]) => `'${key}': ${jankSONStringify(value)}`).join(', ');
    return `{${keyVals}}`
  }
}
