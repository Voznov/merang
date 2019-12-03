package com.voznov.merang.service;

import com.voznov.merang.repository.ProductRepository;
import com.voznov.merang.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProductService {
    @Autowired
    private ProductRepository productRepository;

    @Autowired
    private UserRepository userRepository;


}
