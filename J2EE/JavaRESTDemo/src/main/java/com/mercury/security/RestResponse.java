package com.mercury.security;

public class RestResponse {
	private int code;

	private String message;

	private RestError error;

	public RestResponse(int code, String message, RestError error) {
		this.code = code;
		this.message = message;
		this.error = error;
	}

	public int getCode() {
		return code;
	}

	public void setCode(int code) {
		this.code = code;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	public RestError getError() {
		return error;
	}

	public void setError(RestError error) {
		this.error = error;
	}
}
