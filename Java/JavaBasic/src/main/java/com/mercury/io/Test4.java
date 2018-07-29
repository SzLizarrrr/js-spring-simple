package com.mercury.io;

import java.io.FileOutputStream;
import java.io.IOException;
import java.io.ObjectOutputStream;

public class Test4 {
	
	public static void main(String[] args){
		try(
				FileOutputStream fos = new FileOutputStream("resource/test4.dat");
				ObjectOutputStream oos = new ObjectOutputStream(fos);
		){
			Login login = new Login("abcdef", "123456");
			oos.writeObject(login);
		}catch(IOException e){
			System.err.println(e);
		}
	}
	
}
