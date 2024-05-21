const test = /^(([1-9]+|0)\.[0-9]+[1-9]$|[1-9][0-9]+$)/;
const testCases = [
  "1.01", // true
  "0.10", // true
  "10", // true
  "0.00", // false
  ".1", // false
  "01", // false
  "5.0", // false (小数部分全为零)
  "5.10", // true
  "123", // true
  "0", // false (单独的0)
];
testCases.forEach((testCase) => {
  console.log(`${testCase}: ${test.test(testCase)}`);
});
