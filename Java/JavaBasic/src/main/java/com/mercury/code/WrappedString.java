package com.mercury.code;

public class WrappedString {
	
	private String str;

	public WrappedString() {
		super();
	}

	public WrappedString(String str) {
		super();
		this.str = str;
	}

	public String getStr() {
		return str;
	}

	public void setStr(String str) {
		this.str = str;
	}

	@Override
	public int hashCode() {
		return str.hashCode();
	}

	@Override
	public boolean equals(Object obj) {
		if(!(obj instanceof WrappedString)){
			return false;
		}
		WrappedString ws = (WrappedString)obj;
		return str.equals(ws.str);
	}
	
}
