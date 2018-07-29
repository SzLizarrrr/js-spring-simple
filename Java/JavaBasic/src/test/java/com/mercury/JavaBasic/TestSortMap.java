package com.mercury.JavaBasic;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.Comparator;
import java.util.HashMap;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import java.util.Map.Entry;
import java.util.TreeMap;

import org.junit.Test;

public class TestSortMap {

	@Test
	public void testSortHashMapWithStringString() {
		Map<String, String> map = new HashMap<String, String>();
		map.put("a", "bob");
		map.put("e", "alex");
		map.put("c", "george");
		List<Map.Entry<String,String>> list = new ArrayList<Map.Entry<String,String>>(map.entrySet());
		Collections.sort(list, new Comparator<Map.Entry<String,String>>(){
			@Override
			public int compare(Entry<String, String> o1, Entry<String, String> o2) {
				return o1.getValue().compareTo(o2.getValue());
			}
		});
		map = new LinkedHashMap<String, String>();
		for(Map.Entry<String,String> e : list){
			map.put(e.getKey(), e.getValue());
		}
		System.out.println(Arrays.asList(map));
	}
	
	@Test
	public void testTreeMapReverse(){
		Map<String, String> map = new TreeMap<String, String>(new Comparator<String>(){
			@Override
			public int compare(String o1, String o2) {
				return o2.compareTo(o1);
			}
		});
		map.put("a", "bob");
		map.put("e", "alex");
		map.put("c", "george");
		System.out.println(Arrays.asList(map));
	}

}
