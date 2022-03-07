import "jasmine";
import {TreeNode} from "../jank_tree";

describe('jank_tree tests', () => {

  //    a
  //   b     c
  // d  e    f
  const d = new TreeNode('d');
  const e = new TreeNode('e');
  const f = new TreeNode('f');
  const b = new TreeNode('b', [d, e])
  const c = new TreeNode('c', [f]);
  const a = new TreeNode('a', [b, c]);

  it('can pretty print', () => {
    // Formatting is: `JSON.stringify(a, null, 2);`
    expect(a.toString()).toEqual(`[
  "a",
  [
    [
      "b",
      [
        [
          "d",
          []
        ],
        [
          "e",
          []
        ]
      ]
    ],
    [
      "c",
      [
        [
          "f",
          []
        ]
      ]
    ]
  ]
]`)
  });

  it('can find the LCA given 2 nodes', () => {
    expect(a.lca(a)).toBe(a);
    expect(d.lca(e)).toBe(b);
    expect(d.lca(f)).toBe(a);
  });
});
