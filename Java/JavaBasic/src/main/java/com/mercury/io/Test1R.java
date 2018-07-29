package com.mercury.io;

import java.io.FileInputStream;
import java.io.IOException;

public class Test1R {

	public static void main(String[] args) {
		try(FileInputStream fis = new FileInputStream("resource/test1.dat")){
			int x = fis.read();
			while(x != -1){ // when you reach end of file.
				System.out.println(x);
				x = fis.read();
			}
		}catch(IOException e){
			System.err.println(e);
		}
	}

}
