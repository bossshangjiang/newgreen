package com.example.demo.service;

import com.example.demo.entity.Irr_without_heat_debt;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface Irr_without_heat_debtService extends JpaRepository<Irr_without_heat_debt, Integer> {
    public Irr_without_heat_debt findByPname(String pname);
}
