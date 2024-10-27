def pyramid(x):
    for i in range(1, x + 1):
        row = [str(j + (i - 1) * 2) for j in range(1, i + 1)]
        print(" ".join(row))
x = int(input("Enter the number of rows: "))
pyramid(x)
