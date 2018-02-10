from Queue import Queue

q = Queue()
yMax = len(grid) - 1
xMax = len(grid[0]) - 1
src, food = None, []
for (y, row) in enumerate(grid):
    for (x, item) in enumerate(row):
        if item == "*":
            src = (x, y, 0)
            break
    if src != None:
        break

q.put(src)
shortest = 50000
while not q.empty():
    x, y, dist = q.get()
    if grid[y][x] == "X" or grid[y][x] == "@":
        continue
    elif grid[y][x] == "#":
        shortest = min(shortest, dist)
        grid[y][x] = "@"
        continue
    grid[y][x] = "@"

    if x > 0:
        q.put(( x-1, y,   dist+1))
    if x < xMax:
        q.put(( x+1, y,   dist+1))
    if y > 0:
        q.put(( x,   y-1, dist+1))
    if y < yMax:
        q.put(( x,   y+1, dist+1))

if shortest == 50000:
    shortest = -1

print shortest
