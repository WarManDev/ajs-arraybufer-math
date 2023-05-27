import Daemon from '../Daemon';
import Magician from '../Magician';

test.each([
  ['под чарами', '2', true, 2, 4],
  ['под чарами', '1', true, 5, 0],
  ['не под чарами', '3', false, 3, 8],
])(
  'Проверка метода attack у героя Daemon %s с дистанции %s',
  (_, __, stoned, distance, expected) => {
    const personage = new Daemon('Surik');
    personage.stoned = stoned;
    personage.distance = distance;
    expect(personage.attack).toBe(expected);
  },
);

test.each([
  ['под чарами', '2', true, 2, 4],
  ['под чарами', '1', true, 5, 0],
  ['не под чарами', '3', false, 3, 8],
])(
  'Проверка метода attack у героя Magician %s с дистанции %s',
  (_, __, stoned, distance, expected) => {
    const personage = new Magician('Surik');
    personage.stoned = stoned;
    personage.distance = distance;
    expect(personage.attack).toBe(expected);
  },
);
