let math = require(process.env.AWS ? '/opt/nodejs/common' : '../../layers/layer1/nodejs/common');
var tuc = require( process.env.AWS ? 'temp-units-conv' :'../../layers/layer1/nodejs/node_modules/temp-units-conv');

exports.tuc = () => {
    return `temp: ${math.convert(100)}`
    //return `temp: ${tuc.c2f(math.add(40,60))}`
};
