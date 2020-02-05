import operator

def pairAdd(xs, ys):
  """
  addition of vectors

  pairAdd([x1, x2, x3], [y1, y2, y3]) === [x1 + y1, x2 + y2, x3 + y3]
  """
  return map(operator.add, xs, ys)










# 😀
list(pairAdd([1,2,3], (4,5,6))) 














# 😁
list(pairAdd("123", "45"))













# 😨
list(pairAdd("123", [4, 5, 6]))

