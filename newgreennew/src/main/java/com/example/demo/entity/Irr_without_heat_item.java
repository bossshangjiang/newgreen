package com.example.demo.entity;

import javax.persistence.*;

@Entity
@Table(name="irr_without_heat_item")
public class Irr_without_heat_item {
    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private Integer IRR_WITHOUT_HEAT_ITEM_ID;
    private Double ELE_INCOME;
    private Double GAS_COST;
    private Double GROSS_PROFIT;
    private Double TURNOVER_TAX;
    private Double MANAGE_COST;
    private Double FINANCIAL_COST;
    private Double EBITDA;
    private Double BUSSINESS_INCOME_TAX;
    private Double NET_CASH_FLOW;
    private String STAGE;
    private String pname;

    public Double getELE_INCOME() {
        return ELE_INCOME;
    }

    public void setELE_INCOME(Double ELE_INCOME) {
        this.ELE_INCOME = ELE_INCOME;
    }

    public Double getGAS_COST() {
        return GAS_COST;
    }

    public void setGAS_COST(Double GAS_COST) {
        this.GAS_COST = GAS_COST;
    }

    public Double getGROSS_PROFIT() {
        return GROSS_PROFIT;
    }

    public void setGROSS_PROFIT(Double GROSS_PROFIT) {
        this.GROSS_PROFIT = GROSS_PROFIT;
    }

    public Double getTURNOVER_TAX() {
        return TURNOVER_TAX;
    }

    public void setTURNOVER_TAX(Double TURNOVER_TAX) {
        this.TURNOVER_TAX = TURNOVER_TAX;
    }

    public Double getMANAGE_COST() {
        return MANAGE_COST;
    }

    public void setMANAGE_COST(Double MANAGE_COST) {
        this.MANAGE_COST = MANAGE_COST;
    }

    public Double getFINANCIAL_COST() {
        return FINANCIAL_COST;
    }

    public void setFINANCIAL_COST(Double FINANCIAL_COST) {
        this.FINANCIAL_COST = FINANCIAL_COST;
    }

    public Double getEBITDA() {
        return EBITDA;
    }

    public void setEBITDA(Double EBITDA) {
        this.EBITDA = EBITDA;
    }

    public Double getBUSSINESS_INCOME_TAX() {
        return BUSSINESS_INCOME_TAX;
    }

    public void setBUSSINESS_INCOME_TAX(Double BUSSINESS_INCOME_TAX) {
        this.BUSSINESS_INCOME_TAX = BUSSINESS_INCOME_TAX;
    }

    public Double getNET_CASH_FLOW() {
        return NET_CASH_FLOW;
    }

    public void setNET_CASH_FLOW(Double NET_CASH_FLOW) {
        this.NET_CASH_FLOW = NET_CASH_FLOW;
    }

    public String getSTAGE() {
        return STAGE;
    }

    public void setSTAGE(String STAGE) {
        this.STAGE = STAGE;
    }

    public Integer getIRR_WITHOUT_HEAT_ITEM_ID() {
        return IRR_WITHOUT_HEAT_ITEM_ID;
    }

    public void setIRR_WITHOUT_HEAT_ITEM_ID(Integer IRR_WITHOUT_HEAT_ITEM_ID) {
        this.IRR_WITHOUT_HEAT_ITEM_ID = IRR_WITHOUT_HEAT_ITEM_ID;
    }

    public String getPname() {
        return pname;
    }

    public void setPname(String pname) {
        this.pname = pname;
    }
}
