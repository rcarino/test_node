// Useful representation for pretty printing tree as a deep list.
//
// type isn't totally deprecated in favor of interface https://stackoverflow.com/a/57936986
// "On the other hand, if you can’t express some shape with an interface and
// you need to use a union or tuple type, type aliases are usually the way to
// go."
export type TreeNodeTuple = [string, TreeNodeTuple[]];

export class TreeNode {
  // Benefits of preferring undefined as much as feasible: no default null
  // assignment on init, optional chaining returns undefined, so less potential
  // type casting.
  parent: TreeNode|undefined;

  constructor(readonly data = 'defaultData', readonly children: TreeNode[] = []) {
    children.forEach(child => child.parent = this);
  }

  lca(other: TreeNode): TreeNode|null {
    const myAncestors = new Set<TreeNode>();
    const othersAncestors = new Set<TreeNode>();
    let myCur: TreeNode|undefined = this;
    let otherCur: TreeNode|undefined = other;
    // Scanning both paths in lock-step allows for early termination despite
    // still being O(treeNodes) worst case
    while (myCur || otherCur) {
      myCur && myAncestors.add(myCur);
      otherCur && othersAncestors.add(otherCur);
      if (otherCur && myAncestors.has(otherCur)) {
        return otherCur;
      }
      if (myCur && othersAncestors.has(myCur)) {
        return myCur;
      }
      [myCur, otherCur] = [myCur?.parent, otherCur?.parent];
    }
    return null;
  }

  toString() {
    return JSON.stringify(this.toDeepTuple(), null, 2);
  }

  // for pretty printing
  private toDeepTuple(): TreeNodeTuple {
    return [this.data, this.children.map(node => node.toDeepTuple())]
  }
}
