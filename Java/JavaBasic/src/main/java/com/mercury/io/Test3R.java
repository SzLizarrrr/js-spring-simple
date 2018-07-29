package com.mercury.io;

import java.io.FileInputStream;
import java.io.IOException;
import java.io.ObjectInputStream;

public class Test3R {

	public static void main(String[] args) {
		try(
			FileInputStream fis = new FileInputStream("resource/test3.dat");
			ObjectInputStream ois = new ObjectInputStream(fis);
		){
			Data data = (Data)ois.readObject();
			System.out.println(data);
		}catch(IOException | ClassNotFoundException e){
			System.err.print(e);
		}
	}

}
