export function cpuHeavyFunc(baseNumber: number): number {
  let result = Math.atan(1);
  for (var i = Math.pow(baseNumber, 7); i >= 0; i--) {
    const x = Math.atan(i);
    const y = Math.tan(i);
    result += x * y;
  }
  return result;
}
