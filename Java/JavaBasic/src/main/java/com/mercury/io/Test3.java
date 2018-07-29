package com.mercury.io;

import java.io.FileOutputStream;
import java.io.IOException;
import java.io.ObjectOutputStream;

public class Test3 {
	
	public static void main(String[] args){
		try(
			FileOutputStream fos = new FileOutputStream("resource/test3.dat");
			ObjectOutputStream oos = new ObjectOutputStream(fos);
				){
			Data data = new Data(1234567, 3.14159265, true);
			oos.writeObject(data);
		}catch(IOException e){
			System.out.println(e);
		}
	}
	
}
