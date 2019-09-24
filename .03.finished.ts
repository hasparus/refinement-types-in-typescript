import { Brand } from 'nom-ts';
import { Either, left, right } from 'fp-ts/lib/Either';

type Even = Brand<number, 'Even'>;
const isEven = (x: unknown) => typeof x === 'number' && x % 2 === 0;

const Even = (x: number): Even => {
  if (!isEven(x)) {
    throw new Error(`${x} is not even`);
  }
  return x as Even;
};

const makeEven = (x: number): Either<Error, Even> =>
  isEven(x) ? right(x as Even) : left(new Error(`${x} is not even`));

// ---

console.log(makeEven(3), makeEven(2));

try {
  console.log(Even(3));
} catch (err) {
  console.log(err);
}
