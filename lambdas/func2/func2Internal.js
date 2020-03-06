let math = require(process.env.AWS ? '/opt/nodejs/common' : '../../layers/layer1/nodejs/common');
var tuc = require( process.env.AWS ? 'temp-units-conv' :'../../layers/layer1/nodejs/node_modules/temp-units-conv');

exports.tuc = () => {
    var temp1 = math.convert(100);
    var temp2 = tuc.c2f(math.add(40,60));
    var result = `temp1: ${temp1}, temp2: ${temp2}`;
    return result;
};
