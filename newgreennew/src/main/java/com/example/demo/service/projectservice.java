package com.example.demo.service;

import com.example.demo.entity.Project;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface projectservice extends JpaRepository<Project,Integer>{
    public Project findByPname(String pname);
    public List<Project> findByPdata(String pdate);
}
