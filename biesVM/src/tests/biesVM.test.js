const BiesVM = require('../src/biesVM');

test('should initialize with empty stack and context', () => {
  const vm = new BiesVM();
  expect(vm.stack).toEqual([]);
  expect(vm.context).toEqual([]);
});
