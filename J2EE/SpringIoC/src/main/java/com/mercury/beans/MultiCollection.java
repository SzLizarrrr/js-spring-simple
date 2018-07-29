package com.mercury.beans;

import java.util.List;
import java.util.Map;
import java.util.Properties;
import java.util.Set;

public class MultiCollection {
	private List<String> list;
	private Set<Integer> set;
	private Map<String, Integer> map;
	private Properties properties;

	public List<String> getList() {
		return list;
	}

	public void setList(List<String> list) {
		this.list = list;
	}

	public Set<Integer> getSet() {
		return set;
	}

	public void setSet(Set<Integer> set) {
		this.set = set;
	}

	public Map<String, Integer> getMap() {
		return map;
	}

	public void setMap(Map<String, Integer> map) {
		this.map = map;
	}

	public Properties getProperties() {
		return properties;
	}

	public void setProperties(Properties properties) {
		this.properties = properties;
	}

}
