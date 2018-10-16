package com.example.demo.service;

import com.example.demo.entity.Irr_without_heat_item;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface Irr_without_heat_itemService extends JpaRepository<Irr_without_heat_item,Integer> {
    public List<Irr_without_heat_item> findByPname(String pname);
}
