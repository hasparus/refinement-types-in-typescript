import { Brand } from 'nom-ts';
import { Option, some, none } from 'fp-ts/lib/Option';

type Even = Brand<number, 'Even'>;
const isEven = (x: unknown) => typeof x === 'number' && x % 2 === 0;

const Even = (x: number): Even => {
  if (!isEven(x)) {
    throw new Error(`${x} is not Even`);
  }
  return x as Even;
};

const makeEven = (x: number): Option<Even> =>
  isEven(x) ? some(x as Even) : none;

// ---

console.log(makeEven(3), makeEven(2));

console.log(Even(2));

try {
  console.log(Even(3));
} catch (err) {
  console.log(err);
}
