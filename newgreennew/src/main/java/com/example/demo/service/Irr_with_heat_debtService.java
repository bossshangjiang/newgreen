package com.example.demo.service;

import com.example.demo.entity.Irr_with_heat_debt;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface Irr_with_heat_debtService extends JpaRepository<Irr_with_heat_debt,Integer> {
    public Irr_with_heat_debt findByPname(String panme);
}
