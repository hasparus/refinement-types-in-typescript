import Data.Vect

total
pairAdd : Num a => Vect n a -> Vect n a -> Vect n a
pairAdd Nil       Nil       = Nil
pairAdd (x :: xs) (y :: ys) = x + y :: pairAdd xs ys

let r1 = pairAdd [1, 2, 3] [4, 5, 6]
