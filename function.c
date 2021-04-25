#define _CRT_SECURE_NO_WARNINGS

#include <stdio.h>

int num_total(int a, int b)
{
	int result = a + b;
	return result;
}

int main()
{
	int x, y;
	scanf("%d%d", &x, &y);

	int total;
	total = num_total(x, y);
	printf("%d + %d = %d\n", x, y, total);

	return 0;
}