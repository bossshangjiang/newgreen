package com.example.demo.entity;

import javax.persistence.*;

@Entity
@Table(name="irr_without_heat_debt")
public class Irr_without_heat_debt {
    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private Integer IRR_WITHOUT_HEAT_DEBT_ID;
    private Double IRR_WITHOUT_HEAT_DEBT;
    private Double YEARONE;
    private Double YEARTWO;
    private Double YEARTHREE;
    private Double YEARFOUR;
    private Double YEARFIVE;
    private Double YEARSIX;
    private Double YEARSEVEN;
    private Double YEAREIGHT;
    private Double YEARNINE;
    private Double YEARTEN;
    private String pname;

    public Double getIRR_WITHOUT_HEAT_DEBT() {
        return IRR_WITHOUT_HEAT_DEBT;
    }

    public void setIRR_WITHOUT_HEAT_DEBT(Double IRR_WITHOUT_HEAT_DEBT) {
        this.IRR_WITHOUT_HEAT_DEBT = IRR_WITHOUT_HEAT_DEBT;
    }

    public Double getYEARONE() {
        return YEARONE;
    }

    public void setYEARONE(Double YEARONE) {
        this.YEARONE = YEARONE;
    }

    public Double getYEARTWO() {
        return YEARTWO;
    }

    public void setYEARTWO(Double YEARTWO) {
        this.YEARTWO = YEARTWO;
    }

    public Double getYEARTHREE() {
        return YEARTHREE;
    }

    public void setYEARTHREE(Double YEARTHREE) {
        this.YEARTHREE = YEARTHREE;
    }

    public Double getYEARFOUR() {
        return YEARFOUR;
    }

    public void setYEARFOUR(Double YEARFOUR) {
        this.YEARFOUR = YEARFOUR;
    }

    public Double getYEARFIVE() {
        return YEARFIVE;
    }

    public void setYEARFIVE(Double YEARFIVE) {
        this.YEARFIVE = YEARFIVE;
    }

    public Double getYEARSIX() {
        return YEARSIX;
    }

    public void setYEARSIX(Double YEARSIX) {
        this.YEARSIX = YEARSIX;
    }

    public Double getYEARSEVEN() {
        return YEARSEVEN;
    }

    public void setYEARSEVEN(Double YEARSEVEN) {
        this.YEARSEVEN = YEARSEVEN;
    }

    public Double getYEAREIGHT() {
        return YEAREIGHT;
    }

    public void setYEAREIGHT(Double YEAREIGHT) {
        this.YEAREIGHT = YEAREIGHT;
    }

    public Double getYEARNINE() {
        return YEARNINE;
    }

    public void setYEARNINE(Double YEARNINE) {
        this.YEARNINE = YEARNINE;
    }

    public Double getYEARTEN() {
        return YEARTEN;
    }

    public void setYEARTEN(Double YEARTEN) {
        this.YEARTEN = YEARTEN;
    }

    public Integer getIRR_WITHOUT_HEAT_DEBT_ID() {
        return IRR_WITHOUT_HEAT_DEBT_ID;
    }

    public void setIRR_WITHOUT_HEAT_DEBT_ID(Integer IRR_WITHOUT_HEAT_DEBT_ID) {
        this.IRR_WITHOUT_HEAT_DEBT_ID = IRR_WITHOUT_HEAT_DEBT_ID;
    }

    public String getPname() {
        return pname;
    }

    public void setPname(String pname) {
        this.pname = pname;
    }
}
