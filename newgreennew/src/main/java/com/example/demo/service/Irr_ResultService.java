package com.example.demo.service;

import com.example.demo.entity.Irr_result;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface Irr_ResultService extends JpaRepository<Irr_result,Integer> {
    public Irr_result findByPname(String panme);
}
