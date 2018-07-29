package com.mercury.code;

public class MySingle {
	
	private static MySingle instance;
	
	private MySingle(){
		
	}
	
	public static MySingle getInstance(){
		if(instance == null){
			synchronized(MySingle.class){
				if(instance == null){
					instance = new MySingle();
				}
			}
			
		}
		return instance;
	}

}
