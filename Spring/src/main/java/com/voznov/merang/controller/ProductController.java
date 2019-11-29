package com.voznov.merang.controller;

import com.voznov.merang.repository.ProductRepository;
import com.voznov.merang.repository.UserRepository;
import com.voznov.merang.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ProductController {
    @Autowired
    private ProductRepository productRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private ProductService productService;
}
