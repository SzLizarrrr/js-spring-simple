package com.mercury.JavaBasic;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.List;

import com.mercury.code.BeanA;
import com.mercury.code.BeanB;

public class TestComparison {
	
	private static void printlist(List list){
		for(Object obj : list){
			System.out.println(obj);
		}
	}

	public static void main(String[] args) {
		List<BeanA> list = new ArrayList<>();
		list.add(new BeanA(3));
		list.add(new BeanA(5));
		list.add(new BeanA(1));
		printlist(list);
		Collections.sort(list);
		printlist(list);
		
		List<BeanB> list1 = new ArrayList<>();
		list1.add(new BeanB("X"));
		list1.add(new BeanB("B"));
		list1.add(new BeanB("C"));
		printlist(list1);
		Collections.sort(list1, new Comparator<BeanB>(){

			@Override
			public int compare(BeanB a, BeanB b) {
				return a.getName().compareTo(b.getName());
			}
			
		});
		printlist(list1);
	}

}
