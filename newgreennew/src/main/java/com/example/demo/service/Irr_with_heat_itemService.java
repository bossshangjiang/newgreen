package com.example.demo.service;

import com.example.demo.entity.Irr_with_heat_item;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface Irr_with_heat_itemService extends JpaRepository<Irr_with_heat_item,Integer>{
    public List<Irr_with_heat_item> findByPname(String pname);
}
