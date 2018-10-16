package com.example.demo.service;

import com.example.demo.entity.User_test;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IUser_test extends JpaRepository<User_test,Integer>{

   public User_test findByJobnumber(String Jobnumber);
}
