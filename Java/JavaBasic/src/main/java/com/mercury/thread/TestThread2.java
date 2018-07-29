package com.mercury.thread;

public class TestThread2 {
	
	public static void delay(long ms) {
		try{
			Thread.sleep(ms);
		}catch(Exception e){
			
		}
	}

	public static void main(String[] args) {
		Thread t = new Thread(new Runnable(){

			@Override
			public void run() {
				while(true){
					delay(100);
					System.out.println("running!");
				}
			}
			
		});
		t.setDaemon(true);
		t.start();
		
		
		
		delay(500);
		System.out.println("End of main");
	}

}
