package com.example.demo.entity;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name="projecttest")
public class Project {
    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private Integer ID;
    private String description;
    private String pdata;
    private String partner;
    private String address;
    private String charge;
    private String completeinfo;
    private String pname;
    private String verify;


    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }


    public String getPartner() {
        return partner;
    }

    public void setPartner(String partner) {
        this.partner = partner;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getCharge() {
        return charge;
    }

    public void setCharge(String charge) {
        this.charge = charge;
    }

    public String getCompleteinfo() {
        return completeinfo;
    }

    public void setCompleteinfo(String completeinfo) {
        this.completeinfo = completeinfo;
    }

    public String getPname() {
        return pname;
    }

    public void setPname(String pname) {
        this.pname = pname;
    }


    public String getPdata() {
        return pdata;
    }

    public void setPdata(String pdata) {
        this.pdata = pdata;
    }

    public String getVerify() {
        return verify;
    }

    public void setVerify(String verify) {
        this.verify = verify;
    }

    public Integer getID() {
        return ID;
    }

    public void setID(Integer ID) {
        this.ID = ID;
    }
}
