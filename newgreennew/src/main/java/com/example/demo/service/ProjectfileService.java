package com.example.demo.service;
import com.example.demo.entity.Projectfile;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public interface ProjectfileService extends JpaRepository<Projectfile,Integer>{
    public List<Projectfile> findByPname(String pname);
    public  Projectfile findByFilenameAndPname(String filename,String pname);
    public  List<Projectfile> findByPnameAndFiletype(String pname,String filetype);

}
