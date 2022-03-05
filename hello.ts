import axios from "axios";
import {parse} from "node-html-parser";
import * as _ from "lodash";

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

interface User {
  firstName: string;
  lastName: string;
}

const interfaceExample: User = {
  firstName: 'my name is hov',
  lastName: 'H to the O-V.'
};

export class TreeNode {
  constructor({}) {
  }
}

console.log('ray test interface example is: ', interfaceExample);

console.log(_.padStart("Hello TypeScript!", 20, " "));

console.assert(1 === 1, '1 is not 1');

// console.assert(typeof 1 === 'string', '1 is not a string');