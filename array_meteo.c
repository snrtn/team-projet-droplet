#define _CRT_SECURE_NO_WARNINGS
#include <stdio.h>

#define MONTHS 12

int main(void)
{
	double temperature[MONTHS] = { -4.0, -1.6, 8.1, 13.0, 18.2, 23.1, 27.8, 28.8, 21.5, 13.1,	7.8, -0.6 };

	printf("temperature\t : ");

	for (int m = 0; m < MONTHS; ++m)
		printf("\t%.1f ", temperature[m]);
	printf("\n");

	return 0;
}