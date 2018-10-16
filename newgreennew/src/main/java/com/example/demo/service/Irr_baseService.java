package com.example.demo.service;

import com.example.demo.entity.Irr_base;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface Irr_baseService extends JpaRepository<Irr_base,Integer> {
    public Irr_base findByPname(String pname);
}
