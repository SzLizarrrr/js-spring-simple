package com.mercury.JavaBasic;

import java.util.ArrayList;
import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.mercury.code.BeanB;
import com.mercury.code.Verify;

public class TestLambda {
	
	private static String verifyEven(int x, Verify v){
		if(v.check(x)){
			return "even";
		}else{
			return "odd";
		}
	}
	
	private static String verifySquare(int x, Verify v){
		if(v.check(x)){
			return "square";
		}else{
			return "not a square";
		}
	}
	

	public static void main(String[] args) {
		List<BeanB> list = new ArrayList<>();
		list.add(new BeanB("X"));
		list.add(new BeanB("B"));
		list.add(new BeanB("C"));
		Collections.sort(list, (first, second) -> first.getName().compareTo(second.getName()));
	
		Map<String, Integer> map = new HashMap<>();
		map.put("A", 1);
		map.put("B", 2);
		map.put("C", 3);
		map.forEach((k, v) -> System.out.println(k + ": " + v));
		
		System.out.println(verifyEven(5, x -> x%2 == 0));
		System.out.println(verifyEven(10, x -> x%2 == 0));
		
		System.out.println(verifySquare(16, x-> (int)Math.sqrt(x) * (int)Math.sqrt(x) == x ));
	}

}
