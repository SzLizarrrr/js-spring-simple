package com.mercury.thread;

public class TestThread3 {
	
	public static void delay(long ms) {
		try{
			Thread.sleep(ms);
		}catch(Exception e){
			
		}
	}
	
	// TestThread3
	public synchronized static void foo1(){
		delay(3000);
		System.out.println("End of foo1");
	}
	
	public static void foo2(){
		synchronized(TestThread3.class) { // monitor
			delay(2000);
			System.out.println("End of foo2");
		}
	}
	
	public void foo3(){
		synchronized(this) { // monitor
			delay(2000);
			System.out.println("End of foo3");
		}
	}

	public static void main(String[] args) {
		Thread t1 = new Thread(new Runnable(){

			@Override
			public void run() {
				TestThread3.foo1(); //foo1();
			}
			
		});
		Thread t2 = new Thread(new Runnable(){

			@Override
			public void run() {
				TestThread3.foo2();
			}
			
		});
		Thread t3 = new Thread(new Runnable(){

			@Override
			public void run() {
				TestThread3 t = new TestThread3();
				t.foo3();
			}
			
		});
		t1.start();
		t2.start();
		t3.start();
	}

}
