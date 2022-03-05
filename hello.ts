import axios from "axios";
import {parse} from "node-html-parser";
import * as _ from "lodash";
import {TreeNode} from "./jank_tree";
import {User} from "./user_interface";

console.log('hello yay');

// breakpoints don't run unless we add parameters: --require ts-node/register

async function doAsync() {
  const axiosResp = await axios.get('https://google.com');
  const googDoc = parse(axiosResp.data);
  // console.log('ray test axiosResp: ', axiosResp);
  // console.log('data is: ', axiosResp.data);
  // console.log('sample parsed script is: ', googDoc.querySelector('script'));
}

doAsync();

const interfaceExample: User = {
  firstName: 'my name is hov', lastName: 'H to the O-V.'
};

//    a
//   b     c
// d  e    f
const d = new TreeNode('d');
const e = new TreeNode('e');
const f = new TreeNode('f');
const b = new TreeNode('b', [d, e])
const c = new TreeNode('c', [f]);
const a = new TreeNode('a', [b, c]);

// Shallow printing of depth 2 with stringify. This isn't the same on web?
// Anyhoo, stringify is great for formatting the deep list tree
console.log('ray test tree as deep lists:\n',
  JSON.stringify(a.toLists(), null, 2));

console.log('ray test interface example is: ', interfaceExample);

console.log(_.padStart("Hello TypeScript!", 20, " "));

console.log('ray test JSON stringify example is: ',
  JSON.stringify(interfaceExample, null /* replacer */, 4 /* space */));

console.assert(1 === 1, '1 is not 1');

// console.assert(typeof 1 === 'string', '1 is not a string');
