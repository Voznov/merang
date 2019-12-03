package com.voznov.merang.repository;

import com.voznov.merang.model.Product;
import com.voznov.merang.model.ProductStatus;
import com.voznov.merang.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;
import java.util.List;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {
    List<Product> findAllByNameContainingAndStatus(@NotBlank @Size(max = 50) String name, ProductStatus status);

    List<Product> findAllByOwner(User owner);

    List<Product> findAllByOwnerAndStatus(User owner, ProductStatus status);
}
