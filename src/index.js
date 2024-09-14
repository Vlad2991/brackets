module.exports = function check(str, bracketsConfig) {
  const stack = [];
  const bracketsMap = new Map(bracketsConfig);

  for (let char of str) {
    if (bracketsMap.has(char)) {
      if (stack.length && stack[stack.length - 1] === char) {
        stack.pop();
      } else {
        stack.push(bracketsMap.get(char));
      }
    } else {
      if (stack.length === 0 || stack.pop() !== char) {
        return false;
      }
    }
  }

  return stack.length === 0;
}