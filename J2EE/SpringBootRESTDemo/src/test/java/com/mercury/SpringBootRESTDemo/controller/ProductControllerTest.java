package com.mercury.SpringBootRESTDemo.controller;

import java.util.List;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.RequestBuilder;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;

import com.mercury.SpringBootRESTDemo.bean.Product;
import com.mercury.SpringBootRESTDemo.dao.ProductDao;

@RunWith(SpringRunner.class)
@WebMvcTest(value = ProductController.class, secure = false)
public class ProductControllerTest {
	@Autowired
	private MockMvc mockMvc;

	@MockBean
	ProductDao productDao;
	
	List<Product> products;

	@Test
	public void testGetAllProducts() throws Exception {
		Mockito.when(productDao.findAll()).thenReturn(products);
		System.out.println(products);
		RequestBuilder requestBuilder = MockMvcRequestBuilders.get("/products").accept(MediaType.APPLICATION_JSON);
		MvcResult result = mockMvc.perform(requestBuilder).andReturn();
		System.out.println(result.getResponse().getContentAsString());
	}
}
