#define _CRT_SECURE_NO_WARNINGS

#include <stdio.h>

int main()
{
	int high[12] = { 2, 5 ,11,18,23,27,29,30,26,20,12,4 };
	int low[12] = { -7,-5,1,7,13,18,22,22,16,9,2,-5 };

	for (int i = 0; i < 12; ++i)
	{
		printf("%d, %d\n", high[i], low[i]);
	}

	return 0;
}