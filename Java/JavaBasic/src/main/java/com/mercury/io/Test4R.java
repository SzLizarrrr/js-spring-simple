package com.mercury.io;

import java.io.FileInputStream;
import java.io.IOException;
import java.io.ObjectInputStream;

public class Test4R {

	public static void main(String[] args) {
		try(
				FileInputStream fis = new FileInputStream("resource/test4.dat");
				ObjectInputStream ois = new ObjectInputStream(fis);
			){
				Login login = (Login)ois.readObject();
				System.out.println(login);
			}catch(IOException | ClassNotFoundException e){
				System.err.print(e);
			}
	}

}
