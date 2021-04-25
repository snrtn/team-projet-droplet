#define _CRT_SECURE_NO_WARNINGS

#include <stdio.h>

unsigned num_total(int a, int b)
{
	unsigned result = a + b;
	return result;
}

unsigned main()
{
	unsigned x, y;
	scanf("%d%d", &x, &y);

	unsigned total;
	total = num_total(x, y);
	printf("%d + %d = %d\n", x, y, total);

	return 0;
}