package com.voznov.merang.repository;

import com.voznov.merang.model.Deal;
import com.voznov.merang.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import javax.validation.constraints.NotNull;
import java.util.List;

@Repository
public interface DealRepository extends JpaRepository<Deal, Long> {
    List<Deal> findAllByOwner(@NotNull User owner);

    List<Deal> findAllByTenant(@NotNull User tenant);
}
