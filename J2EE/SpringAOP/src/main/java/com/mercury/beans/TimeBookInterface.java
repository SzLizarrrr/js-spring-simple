package com.mercury.beans;

public interface TimeBookInterface {
	public void doAudit(String name);
	public void doBreak(String name);
	public void doCheck(String name) throws Exception;
	public void doDelete(int num);
}
