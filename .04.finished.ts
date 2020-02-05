import { Brand } from 'nom-ts';
import { Either, left, right } from 'fp-ts/lib/Either';

type Email = Brand<string, 'Email'>;
const isEmail = (x: unknown): x is Email =>
  typeof x === 'string' && x.includes('@');

const Email = (s: string): Email => {
  if (!isEmail(s)) {
    throw new Error(`${s} is not email`);
  }
  return s;
};

const makeEmail = (s: string): Either<Error, Email> =>
  isEmail(s) ? right(s as Email) : left(new Error(`${s} is email`));

// ---

console.log(makeEmail('hasparus@gmail.com'));
console.log(makeEmail('@')); // 🤷‍♂️

try {
  console.log(Email('+48 123 123 123'));
} catch (err) {
  console.log(err);
}
