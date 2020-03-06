let convert = require('temp-units-conv')
exports.add =  (arg1, arg2) => {
    return arg1 + arg2;
};
exports.convert =  (arg1) => {
    return convert.c2f(arg1);
};