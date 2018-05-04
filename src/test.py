from queue import PriorityQueue
import sys

heightMap = [
  [1,4,3,1,3,2],
  [3,2,1,3,2,4],
  [2,3,3,2,3,1]
]

nrows = len(heightMap)
ncols = len(heightMap[0])
q = PriorityQueue()
edges = ([(irow, icol)
  for (irow, row) in enumerate(heightMap)
  for (icol, col) in enumerate(row)
  if irow == 0 or irow == nrows - 1 or icol == 0 or icol == ncols - 1])
# visitors = ([irow == 0 or irow == nrows-1 or icol == 0 or icol == ncols - 1
#   for (irow, row) in enumerate(heightMap)
#   for (icol, col) in enumerate(row)
# ])
visitors = [[-1] * ncols for i in range(nrows)]
for (irow, icol) in edges:
    q.put((heightMap[irow][icol], irow, icol))
maxHeight = -1
while not q.empty():
    height, irow, icol = q.get()
    if height > maxHeight:
        maxHeight = height
    visitors[irow][icol] = max(maxHeight - height, visitors[irow][icol], 0)
    for (row, col) in [(irow-1, icol), (irow+1, icol), (irow, icol-1), (irow, icol+1)]:
        if row >= 0 and row < nrows and col >= 0 and col < ncols and visitors[row][col] < 0:
            q.put((heightMap[row][col], row, col))


print(water)
