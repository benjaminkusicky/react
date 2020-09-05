/* eslint-disable no-restricted-globals */

const workercode = () => {
  const cpuHeavyFunc = (baseNumber) => {
    let result = 0;
    for (var i = Math.pow(baseNumber, 7); i >= 0; i--) {
      result += Math.atan(i) * Math.tan(i);
    }
    return result;
  };

  self.onmessage = function (e) {
    self.postMessage(cpuHeavyFunc(e.data));
  };
};

let code = workercode.toString();
code = code.substring(code.indexOf("{") + 1, code.lastIndexOf("}"));

const blob = new Blob([code], { type: "application/javascript" });
const worker_script = URL.createObjectURL(blob);

module.exports = worker_script;
