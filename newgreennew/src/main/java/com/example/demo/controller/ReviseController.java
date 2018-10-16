package com.example.demo.controller;

import com.example.demo.entity.Project;
import com.example.demo.entity.*;
import net.sf.json.JSONArray;
import net.sf.json.JSONObject;
import net.sf.json.JSONString;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.*;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.persistence.criteria.CriteriaBuilder;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.BufferedOutputStream;
import java.io.File;
import java.io.FileOutputStream;
import java.text.ParseException;
import java.util.List;
import java.util.concurrent.atomic.AtomicInteger;

import org.springframework.stereotype.Controller;

import org.springframework.web.bind.annotation.*;


import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

@Controller
public class ReviseController {

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

//    跳转修改信息第一页
    @RequestMapping(value = "/toinfo2", method = RequestMethod.POST)
    @ResponseBody
    String toshowproject(@RequestParam("pname") String pname){
        System.out.println(pname);
        return pname;
    }

    @RequestMapping(value = "/uploadinfo2", method = RequestMethod.GET)
    String totoshowproject(@RequestParam("pname") String pname, HttpSession session, ModelMap modelMap){
        if(session.getAttribute("type")!="manager"){
            modelMap.put("type", 0);
        }
        else
            modelMap.put("type",1);
        return "uploadinfo2";
    }

//    跳转修改信息第二页
    @RequestMapping(value = "/count3", method = RequestMethod.GET)
    String tocount3(@RequestParam("pname") String name,HttpSession session,ModelMap modelMap){
        if(session.getAttribute("type")!="manager"){
            modelMap.put("type", 0);
        }
        else
            modelMap.put("type",1);
        System.out.println(name);
        return "count3";
    }

    @RequestMapping(value = "/revisecount", method = RequestMethod.POST)
    @ResponseBody
    String torevisecount(@RequestParam("pname") String pname){
        System.out.println(pname);
        return pname;
    }

//    跳转修改信息的文件上传
    @RequestMapping(value = "/newfile", method = RequestMethod.GET)
    String tonewfile(@RequestParam("pname") String name,HttpSession session,ModelMap modelMap){
        if(session.getAttribute("type")!="manager"){
            modelMap.put("type", 0);
        }
        else
            modelMap.put("type",1);
        modelMap.put("name", name);
        System.out.println(name);
        return "newfile";
    }

    //给页面返回project信息
    @RequestMapping(value = "/showproject", method = RequestMethod.POST)
    @ResponseBody
    JSONObject showproject(@RequestParam("pname") String projectname){
        Project project2= projectservice.findByPname(projectname);
        JSONObject json = JSONObject.fromObject(project2);
        String pdata=json.getString("pdata");
        String[] pdataArray=pdata.split("-");
        for (int i = 0; i < pdataArray.length; i++)
            System.out.println(pdataArray[i]);
        json.put("year",pdataArray[0]);
        json.put("month",pdataArray[1]);
        System.out.println(json);
        return json;
    }

    //展示输出irr
    @RequestMapping(value = "/showirr_base", method = RequestMethod.POST)
    @ResponseBody
    JSONObject showirr_base(@RequestParam("pname") String projectname){
        Irr_base irr_base= irr_baseService.findByPname(projectname);
        JSONObject json = JSONObject.fromObject(irr_base);
        return  json;
    }

    //展示出irrresult 的内容
    @RequestMapping(value = "/showirr_result", method = RequestMethod.POST)
    @ResponseBody
    JSONObject showirr_result(@RequestParam("pname") String projectname){
        Irr_result irr_result= irr_resultService.findByPname(projectname);
        JSONObject json = JSONObject.fromObject(irr_result);
        System.out.println(json);
        return  json;
    }


    @RequestMapping(value = "/showirr_without_heat_debt", method = RequestMethod.POST)
    @ResponseBody
    JSONObject showirr_without_heat_debe(@RequestParam("pname") String projectname){
        Irr_without_heat_debt irr_without_heat_debt=irr_without_heat_debtService.findByPname(projectname);
        JSONObject json = JSONObject.fromObject(irr_without_heat_debt);
        return json;
    }


    @RequestMapping(value = "/showirr_with_heat_debt", method = RequestMethod.POST)
    @ResponseBody
    JSONObject showirr_with_heat_debe(@RequestParam("pname") String projectname){
        Irr_with_heat_debt irr_with_heat_debt=irr_with_heat_debtService.findByPname(projectname);
        JSONObject json = JSONObject.fromObject(irr_with_heat_debt);
        return json;
    }


    @RequestMapping(value = "/showirr_with_heat_item", method = RequestMethod.POST)
    @ResponseBody
    JSONObject showirr_with_heat_item(@RequestParam("pname") String projectname){
        List<Irr_with_heat_item> list=irr_with_heat_itemService.findByPname(projectname);
        JSONArray IRR_WITH_HEAT_ITEM_ID=new JSONArray();
        JSONArray ELE_INCOME=new JSONArray();
        JSONArray GAS_COST=new JSONArray();
        JSONArray GROSS_PROFIT=new JSONArray();
        JSONArray TURNOVER_TAX=new JSONArray();
        JSONArray MANAGE_COST=new JSONArray();
        JSONArray FINANCIAL_COST=new JSONArray();
        JSONArray EBITDA=new JSONArray();
        JSONArray BUSSINESS_INCOME_TAX=new JSONArray();
        JSONArray NET_CASH_FLOW=new JSONArray();
        JSONArray STAGE=new JSONArray();
        JSONArray pname=new JSONArray();
        JSONArray HEAT_INCOME=new JSONArray();
        JSONArray INCOME_SUM=new JSONArray();
        JSONObject object = JSONObject.fromObject(list.get(1));
       int j=list.size();
       for(int i=0;i<j;i++){
           IRR_WITH_HEAT_ITEM_ID.add(list.get(i).getIRR_WITH_HEAT_ITEM_ID());
           ELE_INCOME.add(list.get(i).getELE_INCOME());
           GAS_COST.add(list.get(i).getGAS_COST());
           GROSS_PROFIT.add(list.get(i).getGROSS_PROFIT());
           TURNOVER_TAX.add(list.get(i).getTURNOVER_TAX());
           MANAGE_COST.add(list.get(i).getMANAGE_COST());
           FINANCIAL_COST.add(list.get(i).getFINANCIAL_COST());
           EBITDA.add(list.get(i).getEBITDA());
           BUSSINESS_INCOME_TAX.add(list.get(i).getBUSSINESS_INCOME_TAX());
           NET_CASH_FLOW.add(list.get(i).getNET_CASH_FLOW());
           STAGE.add(list.get(i).getSTAGE());
           pname.add(list.get(i).getPname());
           HEAT_INCOME.add(list.get(i).getHEAT_INCOME());
           INCOME_SUM.add(list.get(i).getINCOME_SUM());

       }
        object.put("IRR_WITH_HEAT_ITEM_ID",IRR_WITH_HEAT_ITEM_ID);
        object.put("ELE_INCOME",ELE_INCOME);
        object.put("GAS_COST",GAS_COST);
        object.put("GROSS_PROFIT",GROSS_PROFIT);
        object.put("TURNOVER_TAX",TURNOVER_TAX);
        object.put("MANAGE_COST",MANAGE_COST);
        object.put("FINANCIAL_COST",FINANCIAL_COST);
        object.put("EBITDA",EBITDA);
        object.put("BUSSINESS_INCOME_TAX",BUSSINESS_INCOME_TAX);
        object.put("NET_CASH_FLOW",NET_CASH_FLOW);
        object.put("STAGE",STAGE);
        object.put("pname",pname);
        object.put("HEAT_INCOME",HEAT_INCOME);
        object.put("INCOME_SUM",INCOME_SUM);
//        System.out.println(object);
        return object;
    }


    @RequestMapping(value = "/showirr_without_heat_item", method = RequestMethod.POST)
    @ResponseBody
    JSONObject showirr_withOUT_heat_item(@RequestParam("pname") String projectname){
        List<Irr_without_heat_item> list=irr_without_heat_itemService.findByPname(projectname);
        JSONArray IRR_WITHOUT_HEAT_ITEM_ID=new JSONArray();
        JSONArray ELE_INCOME=new JSONArray();
        JSONArray GAS_COST=new JSONArray();
        JSONArray GROSS_PROFIT=new JSONArray();
        JSONArray TURNOVER_TAX=new JSONArray();
        JSONArray MANAGE_COST=new JSONArray();
        JSONArray FINANCIAL_COST=new JSONArray();
        JSONArray EBITDA=new JSONArray();
        JSONArray BUSSINESS_INCOME_TAX=new JSONArray();
        JSONArray NET_CASH_FLOW=new JSONArray();
        JSONArray STAGE=new JSONArray();
        JSONArray pname=new JSONArray();
        JSONObject object = JSONObject.fromObject(list.get(1));
        int j=list.size();
        for(int i=0;i<j;i++){
            ELE_INCOME.add(list.get(i).getELE_INCOME());
            GAS_COST.add(list.get(i).getGAS_COST());
            GROSS_PROFIT.add(list.get(i).getGROSS_PROFIT());
            TURNOVER_TAX.add(list.get(i).getTURNOVER_TAX());
            MANAGE_COST.add(list.get(i).getMANAGE_COST());
            FINANCIAL_COST.add(list.get(i).getFINANCIAL_COST());
            EBITDA.add(list.get(i).getEBITDA());
            BUSSINESS_INCOME_TAX.add(list.get(i).getBUSSINESS_INCOME_TAX());
            NET_CASH_FLOW.add(list.get(i).getNET_CASH_FLOW());
            STAGE.add(list.get(i).getSTAGE());
            pname.add(list.get(i).getPname());
        }
        object.put("ELE_INCOME",ELE_INCOME);
        object.put("GAS_COST",GAS_COST);
        object.put("GROSS_PROFIT",GROSS_PROFIT);
        object.put("TURNOVER_TAX",TURNOVER_TAX);
        object.put("MANAGE_COST",MANAGE_COST);
        object.put("FINANCIAL_COST",FINANCIAL_COST);
        object.put("EBITDA",EBITDA);
        object.put("BUSSINESS_INCOME_TAX",BUSSINESS_INCOME_TAX);
        object.put("NET_CASH_FLOW",NET_CASH_FLOW);
        object.put("STAGE",STAGE);
        object.put("pname",pname);
//        System.out.println(object);
        return object;
    }


   // 修改project项目基本信息
    @PostMapping(value = "/reviseinfo")
    @ResponseBody
    public String reviseinfo(HttpServletRequest request, ModelMap model) throws ParseException {
        String object = request.getParameter("data");
        System.out.print("前台返回结果"+object);
        JSONObject json =JSONObject.fromObject(object);
        Project project2 = projectservice.findByPname(json.getString("Name"));
        System.out.println("数据库查询结果："+project2);
        Project project=new Project();
        String year=json.getString("year");
        String month=json.getString("month");
        String date = year+"-"+month;

        String name=json.getString("Name");
        project.setID(project2.getID());
        project.setPname(name);
        project.setAddress(json.getString("Place"));
        project.setCompleteinfo(json.getString("work"));
        project.setDescription(json.getString("Content"));
        project.setPartner(json.getString("Partner"));
        project.setCharge(json.getString("Charge"));
        project.setVerify("undone");
        project.setPdata(date);
        projectservice.save(project);
        return name;
    }

    //   reviseirr_base
    @RequestMapping(value = "/reviseirr_base", method = RequestMethod.POST)
    @ResponseBody
    public String uploadirr_base(HttpServletRequest request,ModelMap model)throws ParseException {
        String object = request.getParameter("data");
        String object1 = request.getParameter("pname");
        JSONObject json =JSONObject.fromObject(object);
        json.put("pname",object1);
        System.out.println("IRR----base"+json);
        Irr_base irr_base2 = irr_baseService.findByPname(request.getParameter("pname"));
        Irr_base irr_base1 = new Irr_base();
        irr_base1.setIRR_BASE_ID(irr_base2.getIRR_BASE_ID());
        irr_base1.setPname(request.getParameter("pname"));
        irr_base1.setSCALE(json.getDouble("SCALE"));
        irr_base1.setBUSINESS_INCOME_TAX_RATE(json.getString("BUSINESS_INCOME_TAX_RATE"));
        irr_base1.setCONSTRUCTION_TAX_RATE(json.getString("CONSTRUCTION_TAX_RATE"));
        irr_base1.setCOST_TAX_RATE(json.getString("COST_TAX_RATE"));
        irr_base1.setEDU_ADDITION_TAX_RATE(json.getString("EDU_ADDITION_TAX_RATE"));
        irr_base1.setELE_GENERATION_H(json.getDouble("ELE_GENERATION_H"));
        irr_base1.setHEAT_PRODUCTION(json.getDouble("HEAT_PRODUCTION"));
        irr_base1.setINCOME_VAT_RATE(json.getString("INCOME_VAT_RATE"));
        irr_base1.setINTEREST_RATE(json.getString("INTEREST_RATE"));
        irr_base1.setINVEST_AMOUNT(json.getDouble("INVEST_AMOUNT"));
        irr_base1.setLOCAL_EDU_ADDITION_TAX_RATE(json.getString("LOCAL_EDU_ADDITION_TAX_RATE"));
        irr_base1.setMANAGE_COST( json.getDouble("MANAGE_COST"));
        irr_base1.setSELF_CONSUME_RATIO(json.getString("SELF_CONSUME_RATIO"));
        irr_base1.setWITH_TAX_ELE_PRICE(json.getDouble("WITH_TAX_ELE_PRICE"));
        irr_base1.setWITH_TAX_GAS_COST(json.getDouble("WITH_TAX_GAS_COST"));
        irr_base1.setWITH_TAX_GAS_PRICE(json.getDouble("WITH_TAX_GAS_PRICE"));
        irr_baseService.save(irr_base1);
        return object1;
    }

    //    reviseirr_result
    @RequestMapping(value = "/reviseirr_result", method = RequestMethod.POST)
    @ResponseBody
    public String uploadirr_result(HttpServletRequest request)throws ParseException {
        String object = request.getParameter("data");
        String object1 = request.getParameter("pname");
        JSONObject json =JSONObject.fromObject(object);
        json.put("pname",object1);
        System.out.println("IRR----result"+json);
        //x修改地点
        Irr_result irr_result2=irr_resultService.findByPname(request.getParameter("pname"));
        Irr_result irr_result=new Irr_result();
        irr_result= (Irr_result) JSONObject.toBean(json,Irr_result.class);
        irr_result.setIRR_RESULT_ID(irr_result2.getIRR_RESULT_ID());
        irr_result.setPname(object1);
        irr_resultService.save(irr_result);
        return "success";
    }


    //修改irr_with_heat_debt
    @RequestMapping(value = "/reviseirr_with_heat_debt", method = RequestMethod.POST)
    @ResponseBody
    public String uploadirr_with_heat_debt(HttpServletRequest request)throws ParseException {
        String object = request.getParameter("data");
        System.out.println("uploadirr_with_heat_debt---object"+object);
        String object1 = request.getParameter("pname");
        JSONObject json =JSONObject.fromObject(object);
        json.put("pname",object1);
        System.out.println("uploadirr_with_heat_debt---json"+json);
        //x修改地点
        Irr_with_heat_debt irr_with_heat_debt2=irr_with_heat_debtService.findByPname(request.getParameter("pname"));
        Irr_with_heat_debt irr_with_heat_debt=new Irr_with_heat_debt();
       irr_with_heat_debt= (Irr_with_heat_debt) JSONObject.toBean(json,Irr_with_heat_debt.class);
        irr_with_heat_debt.setIRR_WITH_HEAT_DEBT_ID(irr_with_heat_debt2.getIRR_WITH_HEAT_DEBT_ID());
        irr_with_heat_debt.setPname(object1);
        irr_with_heat_debtService.save(irr_with_heat_debt);
        return "success";
    }


    //reviseirr_without_heat_debt
    @RequestMapping(value = "/reviseirr_without_heat_debt", method = RequestMethod.POST)
    @ResponseBody
    public String uploadirr_without_heat_debt(HttpServletRequest request)throws ParseException {
        String object = request.getParameter("data");
        String object1 = request.getParameter("pname");
        JSONObject json =JSONObject.fromObject(object);
        json.put("pname",object1);
        System.out.println("uploadirr_without_heat_debt"+json);
        //x修改地点
        Irr_without_heat_debt irr_without_heat_debt2=irr_without_heat_debtService.findByPname(request.getParameter("pname"));
        Irr_without_heat_debt irr_without_heat_debt=new Irr_without_heat_debt();

        irr_without_heat_debt= (Irr_without_heat_debt) JSONObject.toBean(json,Irr_without_heat_debt.class);
        irr_without_heat_debt.setIRR_WITHOUT_HEAT_DEBT_ID(irr_without_heat_debt2.getIRR_WITHOUT_HEAT_DEBT_ID());
        irr_without_heat_debt.setPname(object1);
        irr_without_heat_debtService.save(irr_without_heat_debt);

        return "success";
    }


    //reviseirr_with_heat_item
    @RequestMapping(value = "/reviseirr_with_heat_item", method = RequestMethod.POST)
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


        List<Irr_with_heat_item> list1=irr_with_heat_itemService.findByPname(request.getParameter("pname"));
        for(Integer i=0;i<list1.size();i++){
            String st1="stage1";
            if(st1==jsonyear1.getString("STAGE")){
                Integer j=0;
                Irr_with_heat_item irr_with_heat_item=new Irr_with_heat_item();
                irr_with_heat_item= (Irr_with_heat_item) JSONObject.toBean(jsonyear1,Irr_with_heat_item.class);
                irr_with_heat_item.setIRR_WITH_HEAT_ITEM_ID(list1.get(j).getIRR_WITH_HEAT_ITEM_ID());
                irr_with_heat_item.setPname(request.getParameter("pname"));
                irr_with_heat_itemService.save(irr_with_heat_item);
            }
            String st2="stage2";
            if(st2==jsonyear2.getString("STAGE")){
                Integer j=1;
                Irr_with_heat_item irr_with_heat_item=new Irr_with_heat_item();

                irr_with_heat_item= (Irr_with_heat_item) JSONObject.toBean(jsonyear1,Irr_with_heat_item.class);
                irr_with_heat_item.setIRR_WITH_HEAT_ITEM_ID(list1.get(j).getIRR_WITH_HEAT_ITEM_ID());
                irr_with_heat_item.setPname(request.getParameter("pname"));
                irr_with_heat_itemService.save(irr_with_heat_item);
            }
            String st3="stage3";
            if(st3==jsonyear3.getString("STAGE")){
                Integer j=2;
                Irr_with_heat_item irr_with_heat_item=new Irr_with_heat_item();

                irr_with_heat_item= (Irr_with_heat_item) JSONObject.toBean(jsonyear1,Irr_with_heat_item.class);
                irr_with_heat_item.setIRR_WITH_HEAT_ITEM_ID(list1.get(j).getIRR_WITH_HEAT_ITEM_ID());
                irr_with_heat_item.setPname(request.getParameter("pname"));
                irr_with_heat_itemService.save(irr_with_heat_item);
            }
            String st4="stage4";
            if(st4==jsonyear4.getString("STAGE")){
                Integer j=3;
                Irr_with_heat_item irr_with_heat_item=new Irr_with_heat_item();

                irr_with_heat_item= (Irr_with_heat_item) JSONObject.toBean(jsonyear1,Irr_with_heat_item.class);
                irr_with_heat_item.setIRR_WITH_HEAT_ITEM_ID(list1.get(j).getIRR_WITH_HEAT_ITEM_ID());
                irr_with_heat_item.setPname(request.getParameter("pname"));
                irr_with_heat_itemService.save(irr_with_heat_item);
            }
            String st5="stage5";
            if(st5==jsonyear5.getString("STAGE")){
                Integer j=4;
                Irr_with_heat_item irr_with_heat_item=new Irr_with_heat_item();

                irr_with_heat_item= (Irr_with_heat_item) JSONObject.toBean(jsonyear1,Irr_with_heat_item.class);
                irr_with_heat_item.setIRR_WITH_HEAT_ITEM_ID(list1.get(j).getIRR_WITH_HEAT_ITEM_ID());
                irr_with_heat_item.setPname(request.getParameter("pname"));
                irr_with_heat_itemService.save(irr_with_heat_item);
            }
        }
        return "success";
    }


    //reviseirr_without_heat_item
    @RequestMapping(value = "/reviseirr_without_heat_item", method = RequestMethod.POST)
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
        String S1="stage1";
        String S2="stage2";
        String S3="stage3";
        String S4="stage4";
        String S5="stage5";
        System.out.println("uploadirr_without_heat_item---year5"+jsonyear5);
        List<Irr_without_heat_item > list1=irr_without_heat_itemService.findByPname(request.getParameter("pname"));
        for(Integer i=0;i<list1.size();i++){

            if(S1==jsonyear1.getString("STAGE")) {
                Integer j = 0;
                Irr_without_heat_item irr_without_heat_item = new Irr_without_heat_item();

                irr_without_heat_item = (Irr_without_heat_item) JSONObject.toBean(jsonyear1, Irr_without_heat_item.class);
                irr_without_heat_item.setIRR_WITHOUT_HEAT_ITEM_ID(list1.get(j).getIRR_WITHOUT_HEAT_ITEM_ID());
                irr_without_heat_item.setPname(request.getParameter("pname"));
                irr_without_heat_itemService.save(irr_without_heat_item);
            }
            if(S2==jsonyear2.getString("STAGE")){
                Integer j = 1;
                Irr_without_heat_item irr_without_heat_item = new Irr_without_heat_item();

                irr_without_heat_item = (Irr_without_heat_item) JSONObject.toBean(jsonyear1, Irr_without_heat_item.class);
                irr_without_heat_item.setIRR_WITHOUT_HEAT_ITEM_ID(list1.get(j).getIRR_WITHOUT_HEAT_ITEM_ID());
                irr_without_heat_item.setPname(request.getParameter("pname"));
                irr_without_heat_itemService.save(irr_without_heat_item);
            }

            if(S3==jsonyear3.getString("STAGE")){
                Integer j = 2;
                Irr_without_heat_item irr_without_heat_item = new Irr_without_heat_item();

                irr_without_heat_item = (Irr_without_heat_item) JSONObject.toBean(jsonyear1, Irr_without_heat_item.class);
                irr_without_heat_item.setIRR_WITHOUT_HEAT_ITEM_ID(list1.get(j).getIRR_WITHOUT_HEAT_ITEM_ID());
                irr_without_heat_item.setPname(request.getParameter("pname"));
                irr_without_heat_itemService.save(irr_without_heat_item);
            }
            if(S4==jsonyear4.getString("STAGE")){
                Integer j = 3;
                Irr_without_heat_item irr_without_heat_item = new Irr_without_heat_item();

                irr_without_heat_item = (Irr_without_heat_item) JSONObject.toBean(jsonyear1, Irr_without_heat_item.class);
                irr_without_heat_item.setIRR_WITHOUT_HEAT_ITEM_ID(list1.get(j).getIRR_WITHOUT_HEAT_ITEM_ID());
                irr_without_heat_item.setPname(request.getParameter("pname"));
                irr_without_heat_itemService.save(irr_without_heat_item);
            }
            if(S5==jsonyear5.getString("STAGE")){
                Integer j =4;
                Irr_without_heat_item irr_without_heat_item = new Irr_without_heat_item();

                irr_without_heat_item = (Irr_without_heat_item) JSONObject.toBean(jsonyear1, Irr_without_heat_item.class);
                irr_without_heat_item.setIRR_WITHOUT_HEAT_ITEM_ID(list1.get(j).getIRR_WITHOUT_HEAT_ITEM_ID());
                irr_without_heat_item.setPname(request.getParameter("pname"));
                irr_without_heat_itemService.save(irr_without_heat_item);
            }
        }

        return "success";
    }


    //返回修改中文件页面的内容
    @RequestMapping(value = "/showrevisefile", method = RequestMethod.POST)
    @ResponseBody
    JSONObject showrevisefile(@RequestParam("name") String name,@RequestParam("type") String type,ModelMap modelMap,RedirectAttributes attr) {
//        modelMap.put("name", name);//给上传审核页面传项目号
//        modelMap.put("name2", name);
        String pn=name;
        Projectfile pro1=new Projectfile();
        System.out.println(pn+"    "+type);
        List<Projectfile> projectfilelist=projectfileService.findByPnameAndFiletype(pn,type);
        int size=projectfilelist.size();
        JSONArray filename=new JSONArray();
        JSONArray description=new JSONArray();
        JSONArray verify=new JSONArray();
        JSONObject object = new JSONObject();

        for(int i=0;i<size;i++){
            filename.add(projectfilelist.get(i).getFilename());
        }
        for(int i=0;i<size;i++){
            description.add(projectfilelist.get(i).getFiletype());
        }
        for(int i=0;i<size;i++){
            verify.add(projectfilelist.get(i).getVerify());
        }
        System.out.println("revisefile");
        object.put("name",pn);
        object.put("size",size);
        object.put("filename",filename);
        object.put("description",description);
        object.put("verify",verify);
        object.put("type",type);
        System.out.println(object);

        return object;
//        attr.addAttribute("pname",name);
//        return "redirect:/newfile";
    }

}
