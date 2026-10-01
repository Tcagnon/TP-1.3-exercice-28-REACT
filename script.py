input1 = int (input("Entrez un nombre: "))
if input1%2==0:
	print(f"{input1} est un nombre pair")
else:
	print(f"{input1} est un nombre impair")



N = int(input("Entrez un nombre: "))
somme = 0 
for i in range(1, N):
    somme += i
print(f"La somme des nombres de 1 à {N-1} est {somme}")

