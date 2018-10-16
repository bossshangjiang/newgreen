package com.example.demo.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity

public class User_test {
    @Id
    @GeneratedValue
    private Integer id;
    private String name;
    private String pwd;
    private String jobnumber;
    private String authority;

    public User_test(){}

    //getter&setter
    public Integer getId(){
        return id;
    }
    public void setId(Integer id){
        this.id=id;
    }
    public String getName(){
        return name;
    }
    public void setName(String name){
        this.name=name;
    }
    public String getPwd(){return pwd;}
    public void setPwd(String pwd){this.pwd=pwd;}
    public String getJob_number(){
        return jobnumber;
    }
    public void setJob_number(String job_number){
        this.jobnumber=job_number;
    }
    public String getAuthority(){
        return authority;
    }
    public void setAuthority(String authority){
        this.authority=authority;
    }
}
