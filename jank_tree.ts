export class TreeNode {
  constructor(readonly data = 'defaultData', readonly children: TreeNode[] = []) {
  }

  // for pretty printing
  toLists(): any[] {
    return [this.data, this.children.map(node => node.toLists())]
  }
}
