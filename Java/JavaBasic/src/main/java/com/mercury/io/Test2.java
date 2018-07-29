package com.mercury.io;

import java.io.BufferedOutputStream;
import java.io.DataOutputStream;
import java.io.FileOutputStream;
import java.io.IOException;

public class Test2 {

	public static void main(String[] args) {
		int x = 1234567;
		double d = 3.1415926;
		boolean b = true;
		try(
			FileOutputStream fos = new FileOutputStream("resource/test2.dat");
			BufferedOutputStream bos = new BufferedOutputStream(fos);
			DataOutputStream dos = new DataOutputStream(bos);
			){
			dos.writeInt(x);
			dos.writeDouble(d);
			dos.writeBoolean(b);
		}catch(IOException e){
			System.err.println(e);
		}
	}

}
