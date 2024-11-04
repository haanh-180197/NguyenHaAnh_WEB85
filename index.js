// const utils = require('./utils.js');
// đối với export default
import formatPhoneNumber from './utils.js';
// đổi với export cụ thể
import {PI} from './utils.js';
// hoặc lồng 2 cách import lại
import formatPhoneNumber, {PI} from './utils.js';

const format = formatPhoneNumber('2345678900');
console.log(format);
// (234) 567-8900