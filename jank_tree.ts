// Useful representation for pretty printing tree as a deep list
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
