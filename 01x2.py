import operator

def pairAdd(xs, ys):
  return map(operator.add, xs, ys)
























# 😀
list(pairAdd([1,2,3], (4,5,6))) 














# 😁
list(pairAdd("123", "45"))













# 😨
list(pairAdd("123", [4, 5, 6]))

