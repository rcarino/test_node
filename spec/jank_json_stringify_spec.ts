import "jasmine";
import {jankSONStringify} from "../jank_json_stringify";

describe('jank_json_stringify tests', () => {
  it('can deep-stringify num|int primitives and array|objects',
    () => {
      const input = {'a': {'deepObjVal': 2}, 'b': 3, 'c': ['d', {'e': 'f'}]};
      expect(jankSONStringify(input))
        .toEqual(`{'a': {'deepObjVal': 2}, 'b': 3, 'c': ['d', {'e': 'f'}]}`);
    });
});
