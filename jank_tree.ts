// Useful representation for pretty printing tree as a deep list.
//
// type isn't totally deprecated in favor of interface https://stackoverflow.com/a/57936986
// "On the other hand, if you can’t express some shape with an interface and
// you need to use a union or tuple type, type aliases are usually the way to
// go."
export type TreeNodeTuple = [string, TreeNodeTuple[]];

export class TreeNode {
  constructor(readonly data = 'defaultData', readonly children: TreeNode[] = []) {
  }

  toString() {
    return JSON.stringify(this.toDeepTuple(), null, 2);
  }

  // for pretty printing
  private toDeepTuple(): TreeNodeTuple {
    return [this.data, this.children.map(node => node.toDeepTuple())]
  }
}
