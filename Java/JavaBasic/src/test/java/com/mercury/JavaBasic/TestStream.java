package com.mercury.JavaBasic;

import java.util.Arrays;

public class TestStream {

	public static void main(String[] args) {
		// Get count of particular element.
		int[] arr = {1, 2, 3, 1, 2, 4, 1};
		System.out.println(Arrays.stream(arr).filter(num -> num == 1).count());
	}

}
