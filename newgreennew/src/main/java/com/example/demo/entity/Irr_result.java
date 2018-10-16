package com.example.demo.entity;

import javax.persistence.*;

//基础指标的计算结果
@Entity
@Table(name="irr_result")
public class Irr_result {
    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private Integer IRR_RESULT_ID;
    private Double ELE_GENERATION_KWH;
    private Double WITHOUT_TAX_ELE_PRICE;
    private Double WITHOUT_TAX_GAS_PRICE;
    private Double WITHOUT_TAX_GAS_COST;
    private Double FINANCIAL_COST;
    private String IRR_WITH_HEAT;
    private String IRR_WITHOUT_HEAT;
    private String pname;

    public Double getELE_GENERATION_KWH() {
        return ELE_GENERATION_KWH;
    }

    public void setELE_GENERATION_KWH(Double ELE_GENERATION_KWH) {
        this.ELE_GENERATION_KWH = ELE_GENERATION_KWH;
    }

    public Double getWITHOUT_TAX_ELE_PRICE() {
        return WITHOUT_TAX_ELE_PRICE;
    }

    public void setWITHOUT_TAX_ELE_PRICE(Double WITHOUT_TAX_ELE_PRICE) {
        this.WITHOUT_TAX_ELE_PRICE = WITHOUT_TAX_ELE_PRICE;
    }

    public Double getWITHOUT_TAX_GAS_PRICE() {
        return WITHOUT_TAX_GAS_PRICE;
    }

    public void setWITHOUT_TAX_GAS_PRICE(Double WITHOUT_TAX_GAS_PRICE) {
        this.WITHOUT_TAX_GAS_PRICE = WITHOUT_TAX_GAS_PRICE;
    }

    public Double getWITHOUT_TAX_GAS_COST() {
        return WITHOUT_TAX_GAS_COST;
    }

    public void setWITHOUT_TAX_GAS_COST(Double WITHOUT_TAX_GAS_COST) {
        this.WITHOUT_TAX_GAS_COST = WITHOUT_TAX_GAS_COST;
    }

    public Double getFINANCIAL_COST() {
        return FINANCIAL_COST;
    }

    public void setFINANCIAL_COST(Double FINANCIAL_COST) {
        this.FINANCIAL_COST = FINANCIAL_COST;
    }


    public String getIRR_WITH_HEAT() {
        return IRR_WITH_HEAT;
    }

    public void setIRR_WITH_HEAT(String IRR_WITH_HEAT) {
        this.IRR_WITH_HEAT = IRR_WITH_HEAT;
    }

    public String getIRR_WITHOUT_HEAT() {
        return IRR_WITHOUT_HEAT;
    }

    public void setIRR_WITHOUT_HEAT(String IRR_WITHOUT_HEAT) {
        this.IRR_WITHOUT_HEAT = IRR_WITHOUT_HEAT;
    }

    public Integer getIRR_RESULT_ID() {
        return IRR_RESULT_ID;
    }

    public void setIRR_RESULT_ID(Integer IRR_RESULT_ID) {
        this.IRR_RESULT_ID = IRR_RESULT_ID;
    }

    public String getPname() {
        return pname;
    }

    public void setPname(String pname) {
        this.pname = pname;
    }
}
