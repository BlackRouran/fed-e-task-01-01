/*lodash的组合函数  */

const _ = require("lodash")

const reverse = arr => arr.reverse();

const first = arr => arr[0];

const toUpper = str => str.toUpperCase();

const getFirst = _.flowRight( toUpper,first, reverse);

console.log(getFirst(["hjkjk", "ahjjkhhjk"]))
