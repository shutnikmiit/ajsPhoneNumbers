import correctPhoneNumber from '../app';

test('Правка номера "8 (xxx) xxx-xx-xx" на "+7xxxxxxxxxx"', () => {
  const received = correctPhoneNumber('8 (927) 000-00-00');
  const expected = '+79270000000';

  expect(received).toBe(expected);
});

test('Правка номера "+7 xxx xxx xx xx" на "+7xxxxxxxxxx"', () => {
  const received = correctPhoneNumber('+7 960 000 00 00');
  const expected = '+79600000000';

  expect(received).toBe(expected);
});

test('Правка номера "7(xxx)xxx-xx-xx" на "+7xxxxxxxxxx"', () => {
  const received = correctPhoneNumber('7(903)000-00-00');
  const expected = '+79030000000';

  expect(received).toBe(expected);
});

test('Правка номера "+8x xxx xxx xxxx" на "+8xxxxxxxxxxx"', () => {
  const received = correctPhoneNumber('+86 000 000 0000');
  const expected = '+860000000000';

  expect(received).toBe(expected);
});
