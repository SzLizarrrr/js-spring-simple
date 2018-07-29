package com.mercury.thread;

public class Deadlock {
    private static class Friend {
        String name;
        public Friend(String name) {
            this.name = name;
        }
        public synchronized void bow(Friend another) {
            System.out.println(name + " bows to " + another.name);
            another.bowBack(this);
        }
        public synchronized void bowBack(Friend another) {
            System.out.println(name + " bows back to " + another.name);
        }
    }
    
    public static void main(String[] args) throws Exception {
        Friend alice = new Friend("Alice");
        Friend bob = new Friend("Bob");
        Thread r1 = new Thread() {
            @Override
            public void run() {
                System.out.println("a");
                alice.bow(bob);
            }
        };
        Thread r2 = new Thread() {
            @Override
            public void run() {
                System.out.println("b");
                bob.bow(alice);
            }
        };
        r1.start();
        r2.start();
        r1.join();
        r2.join();
        System.out.println("End of Main");
    }
}