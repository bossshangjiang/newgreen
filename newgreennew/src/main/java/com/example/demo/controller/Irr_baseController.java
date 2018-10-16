package com.example.demo.controller;

import com.example.demo.entity.*;
import net.sf.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import javax.servlet.http.HttpServletRequest;
import java.text.ParseException;
import java.util.List;

//数据上传页面的数据存储
@Controller
public class Irr_baseController {
    //irr_base 1
    @Autowired
    com.example.demo.service.Irr_baseService irr_baseService;
    //project 2
    @Autowired
    com.example.demo.service.projectservice projectservice;
    //irr_result 3
    @Autowired
    com.example.demo.service.Irr_ResultService irr_resultService;
    //irr_with_heat_debt 4
    @Autowired
    com.example.demo.service.Irr_with_heat_debtService irr_with_heat_debtService;
    //irr_without_heat_debt 5
    @Autowired
    com.example.demo.service.Irr_without_heat_debtService irr_without_heat_debtService;
    //irr_with_heat_item 6
    @Autowired
    com.example.demo.service.Irr_with_heat_itemService irr_with_heat_itemService;
    //irr_without_heat_item 7
    @Autowired
    com.example.demo.service.Irr_without_heat_itemService irr_without_heat_itemService;
    //projectfile 8
    @Autowired
    com.example.demo.service.ProjectfileService projectfileService;

    //获取基本指标各项数据
    @RequestMapping(value = "/basic/{name}")
    @ResponseBody
    public Irr_base tobasicl(@PathVariable("name") String name){
        return irr_baseService.findByPname(name);
    }

    @RequestMapping(value = "/result/{name}")
    @ResponseBody
    public Irr_result toresult(@PathVariable("name") String name){
        return irr_resultService.findByPname(name);
    }

    //获取不含热收益item数据
    @RequestMapping(value = "/nohotitem/{name}")
    @ResponseBody
    public List<Irr_without_heat_item> toitem(@PathVariable("name") String name){
        return irr_without_heat_itemService.findByPname(name);
    }

    //获取不含热debt数据
    @RequestMapping(value = "/nohotdebt/{name}")
    @ResponseBody
    public Irr_without_heat_debt todebt(@PathVariable("name") String name){
        return irr_without_heat_debtService.findByPname(name);
    }

    //获取含热收益item数据
    @RequestMapping(value = "/hotitem/{name}")
    @ResponseBody
    public List<Irr_with_heat_item> toitem1(@PathVariable("name") String name){
        return irr_with_heat_itemService.findByPname(name);
    }

    //获取含热debt数据
    @RequestMapping(value = "/hotdebt/{name}")
    @ResponseBody
    public Irr_without_heat_debt todebt1(@PathVariable("name") String name){
        return irr_without_heat_debtService.findByPname(name);
    }

//    存基础指标的基本数字
    @RequestMapping(value = "/uploadirr_base", method = RequestMethod.POST)
    @ResponseBody
    public String uploadirr_base(HttpServletRequest request,ModelMap model)throws ParseException {
        String object = request.getParameter("data");
        String object1 = request.getParameter("pname");
        JSONObject json =JSONObject.fromObject(object);
        json.put("pname",object1);
        System.out.println("IRR----base"+json);
// 一
//        Irr_base irr_base1=new Irr_base();
//        irr_base1.setSCALE(json.getDouble("SCALE"));
//        irr_base1.setBUSINESS_INCOME_TAX_RATE(json.getString("BUSINESS_INCOME_TAX_RATE")+"%");
//        irr_base1.setCONSTRUCTION_TAX_RATE(json.getString("CONSTRUCTION_TAX_RATE")+"%");
//        irr_base1.setCOST_TAX_RATE(json.getString("COST_TAX_RATE")+"%");
//        irr_base1.setEDU_ADDITION_TAX_RATE(json.getString("EDU_ADDITION_TAX_RATE")+"%");
//        irr_base1.setELE_GENERATION_H(json.getDouble("ELE_GENERATION_H"));
//        irr_base1.setHEAT_PRODUCTION(json.getDouble("HEAT_PRODUCTION"));
//        irr_base1.setINCOME_VAT_RATE(json.getString("INCOME_VAT_RATE")+"%");
//        irr_base1.setINTEREST_RATE(json.getString("INTEREST_RATE")+"%");
//        irr_base1.setINVEST_AMOUNT(json.getDouble("INVEST_AMOUNT"));
//        irr_base1.setLOCAL_EDU_ADDITION_TAX_RATE(json.getString("LOCAL_EDU_ADDITION_TAX_RATE")+"%");
//        irr_base1.setMANAGE_COST( json.getDouble("MANAGE_COST"));
//        irr_base1.setSELF_CONSUME_RATIO(json.getString("SELF_CONSUME_RATIO"));
//        irr_base1.setWITH_TAX_ELE_PRICE(json.getDouble("WITH_TAX_ELE_PRICE"));
//        irr_base1.setWITH_TAX_GAS_COST(json.getDouble("WITH_TAX_GAS_COST"));
//        irr_base1.setWITH_TAX_GAS_PRICE(json.getDouble("WITH_TAX_GAS_PRICE"));
//二
        model.put("name",object1);
        Irr_base irr_base= (Irr_base)JSONObject.toBean(json,Irr_base.class);
        irr_baseService.save(irr_base);
        System.out.println("----------boject1"+object1);
        return object1;
    }

//    存基础指标的结果
    @RequestMapping(value = "/uploadirr_result", method = RequestMethod.POST)
    @ResponseBody
    public String uploadirr_result(HttpServletRequest request)throws ParseException {
        String object = request.getParameter("data");
        String object1 = request.getParameter("pname");
        JSONObject json =JSONObject.fromObject(object);
        json.put("pname",object1);
        System.out.println("IRR----result"+json);

        Irr_result irr_result= (Irr_result) JSONObject.toBean(json,Irr_result.class);
        irr_resultService.save(irr_result);

        return "success";
    }

    @RequestMapping(value = "/uploadirr_with_heat_debt", method = RequestMethod.POST)
    @ResponseBody
    public String uploadirr_with_heat_debt(HttpServletRequest request)throws ParseException {
        String object = request.getParameter("data");
       System.out.println("uploadirr_with_heat_debt---object"+object);
        String object1 = request.getParameter("pname");
        JSONObject json =JSONObject.fromObject(object);
        json.put("pname",object1);
       System.out.println("uploadirr_with_heat_debt---json"+json);

        Irr_with_heat_debt irr_with_heat_debt= (Irr_with_heat_debt) JSONObject.toBean(json,Irr_with_heat_debt.class);
        irr_with_heat_debtService.save(irr_with_heat_debt);

        return "success";
    }

    @RequestMapping(value = "/uploadirr_without_heat_debt", method = RequestMethod.POST)
    @ResponseBody
    public String uploadirr_without_heat_debt(HttpServletRequest request)throws ParseException {
        String object = request.getParameter("data");
        String object1 = request.getParameter("pname");
        JSONObject json =JSONObject.fromObject(object);
        json.put("pname",object1);
        System.out.println("uploadirr_without_heat_debt"+json);

        Irr_without_heat_debt irr_without_heat_debt= (Irr_without_heat_debt) JSONObject.toBean(json,Irr_without_heat_debt.class);
        irr_without_heat_debtService.save(irr_without_heat_debt);

        return "success";
    }

    @RequestMapping(value = "/uploadirr_with_heat_item", method = RequestMethod.POST)
    @ResponseBody
    public String uploadirr_with_heat_item(HttpServletRequest request)throws ParseException {
        String year1 = request.getParameter("year1");
        JSONObject jsonyear1 =JSONObject.fromObject(year1);
        System.out.println("uploadirr_with_heat_item---year1"+jsonyear1);

        String year2 = request.getParameter("year2");
        JSONObject jsonyear2 =JSONObject.fromObject(year2);
        System.out.println("uploadirr_with_heat_item---year2"+jsonyear2);

        String year3 = request.getParameter("year3");
        JSONObject jsonyear3 =JSONObject.fromObject(year3);
        System.out.println("uploadirr_with_heat_item---year3"+jsonyear3);

        String year4 = request.getParameter("year4");
        JSONObject jsonyear4 =JSONObject.fromObject(year4);
        System.out.println("uploadirr_with_heat_item---year4"+jsonyear4);

        String year5 = request.getParameter("year5");
        JSONObject jsonyear5 =JSONObject.fromObject(year5);
        System.out.println("uploadirr_with_heat_item---year5"+jsonyear5);

        Irr_with_heat_item itemyear1= (Irr_with_heat_item) JSONObject.toBean(jsonyear1,Irr_with_heat_item.class);
        irr_with_heat_itemService.save(itemyear1);
        Irr_with_heat_item itemyear2= (Irr_with_heat_item) JSONObject.toBean(jsonyear2,Irr_with_heat_item.class);
        irr_with_heat_itemService.save(itemyear2);
        Irr_with_heat_item itemyear3= (Irr_with_heat_item) JSONObject.toBean(jsonyear3,Irr_with_heat_item.class);
        irr_with_heat_itemService.save(itemyear3);
        Irr_with_heat_item itemyear4= (Irr_with_heat_item) JSONObject.toBean(jsonyear4,Irr_with_heat_item.class);
        irr_with_heat_itemService.save(itemyear4);
        Irr_with_heat_item itemyear5= (Irr_with_heat_item) JSONObject.toBean(jsonyear5,Irr_with_heat_item.class);
        irr_with_heat_itemService.save(itemyear5);

        return "success";
    }

    @RequestMapping(value = "/uploadirr_without_heat_item", method = RequestMethod.POST)
    @ResponseBody
    public String uploadirr_without_heat_item(HttpServletRequest request)throws ParseException {
        String year1 = request.getParameter("year1");
        JSONObject jsonyear1 =JSONObject.fromObject(year1);
        System.out.println("uploadirr_without_heat_item---year1"+jsonyear1);

        String year2 = request.getParameter("year2");
        JSONObject jsonyear2 =JSONObject.fromObject(year2);
        System.out.println("uploadirr_without_heat_item---year2"+jsonyear2);

        String year3 = request.getParameter("year3");
        JSONObject jsonyear3 =JSONObject.fromObject(year3);
        System.out.println("uploadirr_without_heat_item---year3"+jsonyear3);

        String year4 = request.getParameter("year4");
        JSONObject jsonyear4 =JSONObject.fromObject(year4);
        System.out.println("uploadirr_without_heat_item---year4"+jsonyear4);

        String year5 = request.getParameter("year5");
        JSONObject jsonyear5 =JSONObject.fromObject(year5);
        System.out.println("uploadirr_without_heat_item---year5"+jsonyear5);

        Irr_without_heat_item itemyear1= (Irr_without_heat_item) JSONObject.toBean(jsonyear1,Irr_without_heat_item.class);
        irr_without_heat_itemService.save(itemyear1);
        Irr_without_heat_item itemyear2= (Irr_without_heat_item) JSONObject.toBean(jsonyear2,Irr_without_heat_item.class);
        irr_without_heat_itemService.save(itemyear2);
        Irr_without_heat_item itemyear3= (Irr_without_heat_item) JSONObject.toBean(jsonyear3,Irr_without_heat_item.class);
        irr_without_heat_itemService.save(itemyear3);
        Irr_without_heat_item itemyear4= (Irr_without_heat_item) JSONObject.toBean(jsonyear4,Irr_without_heat_item.class);
        irr_without_heat_itemService.save(itemyear4);
        Irr_without_heat_item itemyear5= (Irr_without_heat_item) JSONObject.toBean(jsonyear5,Irr_without_heat_item.class);
        irr_without_heat_itemService.save(itemyear5);

        return "success";
    }
}
