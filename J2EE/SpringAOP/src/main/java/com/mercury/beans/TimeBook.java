package com.mercury.beans;

public class TimeBook implements TimeBookInterface {

    @Override
    public void doAudit(String name) {
        // TODO Auto-generated method stub
        System.out.println(name + " is auditing");
    }

    @Override
    public void doBreak(String name) {
        // TODO Auto-generated method stub
        System.out.println(name + " is taking a break");
    }

    @Override
    public void doCheck(String name) throws Exception {
        // TODO Auto-generated method stub
        System.out.println(name + " is checking");
        throw new Exception();
    }

    @Override
    public void doDelete(int num) {
        // TODO Auto-generated method stub
        if (num<100) {
            System.out.println(num + " lines are deleted");
        } else {
            throw new RuntimeException("Too many lines");
        }
    }

}