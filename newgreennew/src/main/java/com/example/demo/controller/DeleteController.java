package com.example.demo.controller;

import com.example.demo.entity.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

//删除项目功能
@Controller
public class DeleteController {
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

    //通过项目名称查找某个项目的id并删除
    @RequestMapping(value = "/searchproject", method = RequestMethod.POST)
    @ResponseBody
    String searchproject(@RequestParam("pname") String projectname) {
        String n = projectname;
        System.out.println(n);
        //project id  1
        Project project = projectservice.findByPname(n);
            Integer projectid = project.getID();
            if(projectid!=null)
            projectservice.delete(projectid);
        //irr_base id 2
        Irr_base irr_base = irr_baseService.findByPname(n);
            Integer irr_baseid = irr_base.getIRR_BASE_ID();
           if(irr_baseid!=null)
            irr_baseService.delete(irr_baseid);
        //irr_rusult id 3
        Irr_result irr_result=irr_resultService.findByPname(n);
        Integer irr_resultid=irr_result.getIRR_RESULT_ID();
        if(irr_resultid!=null)
        irr_resultService.delete(irr_resultid);
        //irr_with_heat_debt  4
        Irr_with_heat_debt irr_with_heat_debt=irr_with_heat_debtService.findByPname(n);
        Integer irr_with_heat_debtid=irr_with_heat_debt.getIRR_WITH_HEAT_DEBT_ID();
        if(irr_with_heat_debtid!=null)
            irr_with_heat_debtService.delete(irr_with_heat_debtid);
        //irr_without_heat_dabt 5
        Irr_without_heat_debt irr_without_heat_debt=irr_without_heat_debtService.findByPname(n);
        Integer irr_without_heat_debtid=irr_without_heat_debt.getIRR_WITHOUT_HEAT_DEBT_ID();
        if(irr_without_heat_debtid!=null)
            irr_without_heat_debtService.delete(irr_without_heat_debtid);

        //projectfile id 6
        List<Projectfile> projectfilelist=projectfileService.findByPname(n);
        Integer firstlistsize3=projectfilelist.size();
        System.out.println(firstlistsize3);

        for(int i=0;i<firstlistsize3;i++){
            Integer projectfile_testid=projectfilelist.get(i).getId();
            if(projectfile_testid!=null)
                projectfileService.delete(projectfile_testid);
        }

         //irr_with_heat_item 7
        List<Irr_with_heat_item> firstlist=new ArrayList<Irr_with_heat_item>();
            firstlist= irr_with_heat_itemService.findByPname(n);
        Integer firstlistsize=firstlist.size();
            System.out.println(firstlistsize);
            for(int i=0;i<firstlistsize;i++){
                Integer  irr_with_heat_itemid=firstlist.get(i).getIRR_WITH_HEAT_ITEM_ID();
                if(irr_with_heat_itemid!=null)
                    irr_with_heat_itemService.delete(irr_with_heat_itemid);
            }
            //irr_without_heat_item 8
        List<Irr_without_heat_item> firstlist2=new ArrayList<Irr_without_heat_item>();
        firstlist2= irr_without_heat_itemService.findByPname(n);
        Integer firstlistsize2=firstlist.size();
        for(int i=0;i<firstlistsize2;i++){
            Integer  irr_without_heat_itemid=firstlist2.get(i).getIRR_WITHOUT_HEAT_ITEM_ID();
            if(irr_without_heat_itemid!=null)
//            System.out.println(irr_without_heat_itemid);
            irr_without_heat_itemService.delete(irr_without_heat_itemid);
        }

        return "success";
    }

}
