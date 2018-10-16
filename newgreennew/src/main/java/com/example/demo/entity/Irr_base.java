package com.example.demo.entity;

import javax.persistence.*;

//基础指标填的数字
@Entity
@Table(name="irr_base")
public class Irr_base {
    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private Integer IRR_BASE_ID;
    private Double SCALE;
    private Double ELE_GENERATION_H;
    private String SELF_CONSUME_RATIO;
    private Double HEAT_PRODUCTION;
    private String INCOME_VAT_RATE;
    private Double WITH_TAX_ELE_PRICE;
    private Double WITH_TAX_GAS_PRICE;
    private String INTEREST_RATE;
    private Double INVEST_AMOUNT;
    private Double MANAGE_COST;
    private String CONSTRUCTION_TAX_RATE;
    private String EDU_ADDITION_TAX_RATE;
    private String LOCAL_EDU_ADDITION_TAX_RATE;
    private String BUSINESS_INCOME_TAX_RATE;
    private String COST_TAX_RATE;
    private Double WITH_TAX_GAS_COST;
    private String pname;

    public Irr_base(){}


    public String getSELF_CONSUME_RATIO() {
        return SELF_CONSUME_RATIO;
    }

    public void setSELF_CONSUME_RATIO(String SELF_CONSUME_RATIO) {
        this.SELF_CONSUME_RATIO = SELF_CONSUME_RATIO;
    }


    public String getINCOME_VAT_RATE() {
        return INCOME_VAT_RATE;
    }

    public void setINCOME_VAT_RATE(String INCOME_VAT_RATE) {
        this.INCOME_VAT_RATE = INCOME_VAT_RATE;
    }

    public String getINTEREST_RATE() {
        return INTEREST_RATE;
    }

    public void setINTEREST_RATE(String INTEREST_RATE) {
        this.INTEREST_RATE = INTEREST_RATE;
    }



    public String getCONSTRUCTION_TAX_RATE() {
        return CONSTRUCTION_TAX_RATE;
    }

    public void setCONSTRUCTION_TAX_RATE(String CONSTRUCTION_TAX_RATE) {
        this.CONSTRUCTION_TAX_RATE = CONSTRUCTION_TAX_RATE;
    }

    public String getEDU_ADDITION_TAX_RATE() {
        return EDU_ADDITION_TAX_RATE;
    }

    public void setEDU_ADDITION_TAX_RATE(String EDU_ADDITION_TAX_RATE) {
        this.EDU_ADDITION_TAX_RATE = EDU_ADDITION_TAX_RATE;
    }

    public String getLOCAL_EDU_ADDITION_TAX_RATE() {
        return LOCAL_EDU_ADDITION_TAX_RATE;
    }

    public void setLOCAL_EDU_ADDITION_TAX_RATE(String LOCAL_EDU_ADDITION_TAX_RATE) {
        this.LOCAL_EDU_ADDITION_TAX_RATE = LOCAL_EDU_ADDITION_TAX_RATE;}


    public String getCOST_TAX_RATE() {
        return COST_TAX_RATE;
    }

    public void setCOST_TAX_RATE(String COST_TAX_RATE) {
        this.COST_TAX_RATE = COST_TAX_RATE;
    }


    public String toString(){
        return this.BUSINESS_INCOME_TAX_RATE + ", " + this.WITH_TAX_ELE_PRICE ;
    }


    public String getBUSINESS_INCOME_TAX_RATE() {
        return BUSINESS_INCOME_TAX_RATE;
    }

    public void setBUSINESS_INCOME_TAX_RATE(String BUSINESS_INCOME_TAX_RATE) {
        this.BUSINESS_INCOME_TAX_RATE = BUSINESS_INCOME_TAX_RATE;
    }

    public Double getSCALE() {
        return SCALE;
    }

    public void setSCALE(Double SCALE) {
        this.SCALE = SCALE;
    }

    public Double getELE_GENERATION_H() {
        return ELE_GENERATION_H;
    }

    public void setELE_GENERATION_H(Double ELE_GENERATION_H) {
        this.ELE_GENERATION_H = ELE_GENERATION_H;
    }

    public Double getHEAT_PRODUCTION() {
        return HEAT_PRODUCTION;
    }

    public void setHEAT_PRODUCTION(Double HEAT_PRODUCTION) {
        this.HEAT_PRODUCTION = HEAT_PRODUCTION;
    }


    public Double getWITH_TAX_GAS_PRICE() {
        return WITH_TAX_GAS_PRICE;
    }

    public void setWITH_TAX_GAS_PRICE(Double WITH_TAX_GAS_PRICE) {
        this.WITH_TAX_GAS_PRICE = WITH_TAX_GAS_PRICE;
    }

    public Double getWITH_TAX_ELE_PRICE() {
        return WITH_TAX_ELE_PRICE;
    }

    public void setWITH_TAX_ELE_PRICE(Double WITH_TAX_ELE_PRICE) {
        this.WITH_TAX_ELE_PRICE = WITH_TAX_ELE_PRICE;
    }

    public Double getINVEST_AMOUNT() {
        return INVEST_AMOUNT;
    }

    public void setINVEST_AMOUNT(Double INVEST_AMOUNT) {
        this.INVEST_AMOUNT = INVEST_AMOUNT;
    }

    public Double getMANAGE_COST() {
        return MANAGE_COST;
    }

    public void setMANAGE_COST(Double MANAGE_COST) {
        this.MANAGE_COST = MANAGE_COST;
    }

    public Double getWITH_TAX_GAS_COST() {
        return WITH_TAX_GAS_COST;
    }

    public void setWITH_TAX_GAS_COST(Double WITH_TAX_GAS_COST) {
        this.WITH_TAX_GAS_COST = WITH_TAX_GAS_COST;
    }


    public Integer getIRR_BASE_ID() {
        return IRR_BASE_ID;
    }

    public void setIRR_BASE_ID(Integer IRR_BASE_ID) {
        this.IRR_BASE_ID = IRR_BASE_ID;
    }

    public String getPname() {
        return pname;
    }

    public void setPname(String pname) {
        this.pname = pname;
    }
}
