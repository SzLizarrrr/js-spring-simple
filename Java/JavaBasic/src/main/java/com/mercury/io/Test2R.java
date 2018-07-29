package com.mercury.io;

import java.io.BufferedInputStream;
import java.io.DataInputStream;
import java.io.FileInputStream;
import java.io.IOException;

public class Test2R {

	public static void main(String[] args) {
		try(
			FileInputStream fis = new FileInputStream("resource/test2.dat");
			BufferedInputStream bis = new BufferedInputStream(fis);
			DataInputStream dis = new DataInputStream(bis);
			){
			System.out.println(dis.readInt());
			System.out.println(dis.readDouble());
			System.out.println(dis.readBoolean());
		} catch(IOException e){
			System.out.println(e);
		}
	}

}
