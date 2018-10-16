package com.example.demo.controller;
import com.example.demo.entity.*;
import com.example.demo.service.*;
import net.sf.json.JSONArray;
import net.sf.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.*;


import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.BufferedOutputStream;
import java.io.File;
import java.io.FileOutputStream;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.apache.tomcat.util.http.fileupload.FileUtils;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import javax.servlet.http.HttpServletRequest;
import java.io.File;

//项目基本信息存储
@Controller
public class ProjectController {
    @Autowired
    com.example.demo.service.projectservice projectservice;
    @Autowired
    private ProjectfileService projectfileService;
    @Autowired
    private Irr_baseService irr_baseService;
    @Autowired
    private Irr_with_heat_itemService irr_with_heat_itemService;
    @Autowired
    private Irr_with_heat_debtService irr_with_heat_debtService;
    @Autowired
    private Irr_ResultService irr_resultService;
    @Autowired
    private Irr_without_heat_debtService irr_without_heat_debtService;
    @Autowired
    private Irr_without_heat_itemService irr_without_heat_itemService;

    //测试页面countlrb(利润表）
    @RequestMapping(value = "/countlrb", method = RequestMethod.GET)
    public String lirunbiao() {
        return "countlrb";
    }

    //跳转含热信息
    @RequestMapping(value = "/hot1", method = RequestMethod.POST)
    @ResponseBody
    public String hot(@RequestParam("pname") String pname){
        System.out.println(pname);
        return pname;
    }

    @RequestMapping(value = "/hot", method = RequestMethod.GET)
    public String tohot(HttpSession session, ModelMap modelMap){
        if(session.getAttribute("type")!="manager"){
            modelMap.put("type", 0);
        }
        else
            modelMap.put("type",1);
        return "hot";
    }

//    获取含热详情
    @RequestMapping(value = "/hotitem", method = RequestMethod.POST)
    @ResponseBody
    public JSONArray hotitem(@RequestParam("pname") String pname){
        List<Irr_with_heat_item> list = irr_with_heat_itemService.findByPname(pname);
        JSONArray json = JSONArray.fromObject(list);
        System.out.println(json);
        return json;
    }

//    获取含热表格
    @RequestMapping(value = "/hotdebt", method = RequestMethod.POST)
    @ResponseBody
    public JSONObject hotdebt(@RequestParam("pname") String pname){
        Irr_with_heat_debt project2=irr_with_heat_debtService.findByPname(pname);
        JSONObject json = JSONObject.fromObject(project2);
        System.out.println(json);
        return json;
    }

    //跳转不含热信息
    @RequestMapping(value = "/nohot1", method = RequestMethod.POST)
    @ResponseBody
    public String nohot(@RequestParam("pname") String pname){
        System.out.println(pname);
        return pname;
    }

    @RequestMapping(value = "/nohot", method = RequestMethod.GET)
    public String tonohot(HttpSession session, ModelMap modelMap){
        if(session.getAttribute("type")!="manager"){
            modelMap.put("type", 0);
        }
        else
            modelMap.put("type",1);
        return "nohot";
    }

    //    获取不含热详情
    @RequestMapping(value = "/nohotitem", method = RequestMethod.POST)
    @ResponseBody
    public JSONArray getnohot(@RequestParam("pname") String pname){
        List<Irr_without_heat_item> list = irr_without_heat_itemService.findByPname(pname);
        JSONArray json = JSONArray.fromObject(list);
        System.out.println(json);
        return json;
    }

    //    获取不含热表格
    @RequestMapping(value = "/nohotdebt", method = RequestMethod.POST)
    @ResponseBody
    public JSONObject getnodebt(@RequestParam("pname") String pname){
        Irr_without_heat_debt project2=irr_without_heat_debtService.findByPname(pname);
        JSONObject json = JSONObject.fromObject(project2);
        System.out.println(json);
        return json;
    }


    //跳转查看项目第一页
    @RequestMapping(value = "/basics", method = RequestMethod.POST)
    @ResponseBody
    public String basics(@RequestParam("pname") String pname){
        System.out.println(pname);
        return pname;
    }


    @RequestMapping(value = "/basics-index", method = RequestMethod.GET)
    public String tobasics(HttpSession session,ModelMap modelMap){
        if(session.getAttribute("type")!="manager"){
            modelMap.put("type", 0);
        }
        else
            modelMap.put("type",1);
        return "basics-index";
    }


    @RequestMapping(value = "/getbasic", method = RequestMethod.POST)
    @ResponseBody
    public JSONObject getbasic(@RequestParam("pname") String pname){
        Irr_base project1=irr_baseService.findByPname(pname);
        JSONObject json = JSONObject.fromObject(project1);
        System.out.println(json);
        return json;
    }

    @RequestMapping(value = "/getresult", method = RequestMethod.POST)
    @ResponseBody
    public JSONObject getresult(@RequestParam("pname") String pname){
        Irr_result project2=irr_resultService.findByPname(pname);
        JSONObject json = JSONObject.fromObject(project2);
        System.out.println(json);
        return json;
    }

    //数据上传页面
    @RequestMapping(value = "/count", method = RequestMethod.GET)
    public String tocount(HttpSession session,ModelMap modelMap) {
        if(session.getAttribute("type")!="manager"){
            modelMap.put("type", 0);
        }
        else
            modelMap.put("type",1);
        return "count";
    }

    //跳转项目基本信息
    @RequestMapping(value = "/detail", method = RequestMethod.POST)
    @ResponseBody
    public String detail(@RequestParam("pname") String pname){
        System.out.println(pname);
        return pname;
    }

    //跳转项目基本信息
    @RequestMapping(value = "/detail", method = RequestMethod.GET)
    public String todetail(@RequestParam("pname") String pname,HttpSession session,ModelMap modelMap){
        if(session.getAttribute("type")!="manager"){
            modelMap.put("type", 0);
        }
        else
            modelMap.put("type",1);
        return "detail";
    }

    //获取项目基本信息
    @RequestMapping(value = "/getdetail", method = RequestMethod.POST)
    @ResponseBody
    public JSONObject getdetail(@RequestParam("pname") String pname){
        System.out.println("in get detail---------------------"+pname);
        Project project1=projectservice.findByPname(pname);
        String partner=project1.getPartner();
        String pdata=project1.getPdata();
        String charge=project1.getCharge();
        String description=project1.getDescription();
        String completeinfo=project1.getCompleteinfo();
        String address=project1.getAddress();
        JSONObject object = new JSONObject();
        object.put("partner",partner);
        object.put("pdata",pdata);
        object.put("charge",charge);
        object.put("description",description);
        object.put("completeinfo",completeinfo);
        object.put("pname",pname);
        object.put("address",address);
        return object;
    }

    //数据评估页面
    @RequestMapping(value = "/count2", method = RequestMethod.GET)
    public String tocount2(HttpSession session, ModelMap modelMap) {
        if(session.getAttribute("type")!="manager"){
            modelMap.put("type", 0);
        }
        else
            modelMap.put("type",1);
        return "count2";
    }


    //项目文件
    @RequestMapping(value = "/file", method = RequestMethod.GET)
    public String totoverify(HttpSession session, ModelMap modelMap) {
        if(session.getAttribute("type")!="manager"){
            modelMap.put("type", 0);
        }
        else
            modelMap.put("type",1);
        return "file";
    }


    //审核
    @RequestMapping(value = "/verify", method = RequestMethod.GET)
    public String toverify(HttpSession session, ModelMap modelMap) {
        if(session.getAttribute("type")!="manager"){
            modelMap.put("type", 0);
        }
        else
            modelMap.put("type",1);
        return "verify";
    }

    //项目文件
    @RequestMapping(value = "/detailfile", method = RequestMethod.GET)
    public String todetailfile(HttpSession session, ModelMap modelMap)
    {
        if(session.getAttribute("type")!="manager"){
            modelMap.put("type", 0);
        }
        else
            modelMap.put("type",1);
        return "detailfile";
    }

    @RequestMapping(value = "/verify1", method = RequestMethod.GET)
    public String verify1(HttpSession session,ModelMap modelMap) {
        if(session.getAttribute("type")!="manager"){
            modelMap.put("type", 0);
        }
        else
            modelMap.put("type",1);
        return "verify1";
    }


    //返回审核详情页面的内容
    @RequestMapping(value = "/showfile", method = RequestMethod.POST)
    @ResponseBody
    JSONObject showfile(@RequestParam("pname") String pname) {
        String pn=pname;
        Projectfile pro1=new  Projectfile();
        List<Projectfile> projectfilelist=projectfileService.findByPname(pn);
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
        object.put("name",pn);
        object.put("size",size);
        object.put("filename",filename);
        object.put("description",description);
        object.put("verify",verify);
        System.out.println(object);
        return object;
    }

//    删除单个文件
    @RequestMapping(value="/deletefile", method = RequestMethod.POST)
    @ResponseBody
    public String deletefile(HttpServletRequest request,
                                           @RequestParam("filename") String filename,
                                           @RequestParam("pname") String pname,
                             ModelMap modelMap,RedirectAttributes attr){
        modelMap.put("name", pname);//给上传审核页面传项目号
        modelMap.put("name2", pname);
        Projectfile projectfile=projectfileService.findByFilenameAndPname(filename,pname);
        Integer projectfile_id=projectfile.getId();
        System.out.println(projectfile_id);
        if(projectfile_id!=null)
        projectfileService.delete(projectfile_id);
        return "success";
    }


    //文件审核页面的文件下载
    @RequestMapping(value="/download")
    public ResponseEntity<byte[]> download(HttpServletRequest request,
                                           @RequestParam("filename") String filename,
                                           @RequestParam("amp;pname") String pname,
                                           Model model)throws Exception {
        //下载文件路径
//        String path = "E:/demo/test3";
        System.out.println(pname);
        //服务器上改为C盘
        File projectdir =new File("C:/uploadfile/"+pname);
        if  (!projectdir .exists()  && !projectdir .isDirectory())
        {
            System.out.println("//目录不存在");
            projectdir.mkdir();
        } else
        {
            System.out.println("//目录存在");
        }
        String projectpath = projectdir.getPath();
        System.out.println(projectpath);

        File file = new File(projectpath + File.separator + filename);
        HttpHeaders headers = new HttpHeaders();
        //下载显示的文件名，解决中文名称乱码问题
        String downloadFielName = new String(filename.getBytes("UTF-8"),"iso-8859-1");
        //通知浏览器以attachment（下载方式）打开图片
        headers.setContentDispositionFormData("attachment", downloadFielName);
        //application/octet-stream ： 二进制流数据（最常见的文件下载）。
        headers.setContentType(MediaType.APPLICATION_OCTET_STREAM);
        return new ResponseEntity<byte[]>(org.apache.commons.io.FileUtils.readFileToByteArray(file),
                headers, HttpStatus.CREATED);
    }

    // 跳转项目管理页面
    @RequestMapping(value = "/manage", method = RequestMethod.GET)
    public String tomanage(HttpSession session, ModelMap modelMap) {
        if (session.getAttribute("type").equals("manager")) {
            modelMap.put("type", 1);
        } else modelMap.put("type", 0);
        System.out.println(session.getAttribute("type"));
        return "manage";
    }

    //跳转项目基本信息上传页面
    @RequestMapping(value = "/uploadinfo",method = RequestMethod.GET)
    public String toinfomation(HttpSession session, ModelMap modelMap) {
        if(session.getAttribute("type")!="manager"){
            modelMap.put("type", 0);
        }
        else
            modelMap.put("type",1);
        return "/uploadinfo";
    }


    //按名称获取列表信息
    @RequestMapping(value = "/searchbypname", method = RequestMethod.POST)
    @ResponseBody
    JSONObject serchbyname(@RequestParam("projectname") String projectname) {
        String n=projectname;
        JSONObject object = new JSONObject();
        Project project1=new Project();
        project1.setPname(projectname);
        Project project2= projectservice.findByPname(n);
        if(project2!=null){
            String name=project2.getPname();
            String date=project2.getPdata();
            String partner=project2.getPartner();
            object.put("name",name);
            object.put("date",date);
            object.put("partner",partner);
        }
        else{
            object.put("name","none");
        }
        System.out.println("审核页面信息------"+object);
        return object;
    }

    //按日期获取项目列表
    @RequestMapping(value = "/searchbypdate", method = RequestMethod.POST)
    @ResponseBody
    JSONObject serchbydate(@RequestParam("datasearch") String datasearch) {
        String n=datasearch;
        JSONObject object = new JSONObject();
        List<Project> lst=new ArrayList<Project>();
        Project pro1=new Project();

        lst=projectservice.findByPdata(n);
        int size= lst.size();
        if(size==0){
            object.put("size",0);
            return object;
        }
        for(int i=0;i<size;i++){
            object.put("name"+i,lst.get(i).getPname());
        }
        for(int i=0;i<size;i++){
            object.put("date"+i,lst.get(i).getPdata());
        }
        for(int i=0;i<size;i++){
            object.put("partner"+i,lst.get(i).getPartner());
        }
        object.put("size",size);
        return object;
    }

//    上传项目基本信息
    @RequestMapping(value = "/uploadinfo", method = RequestMethod.POST)
    @ResponseBody
    public String uploadinfo(HttpServletRequest request,ModelMap model) throws ParseException {
        String object = request.getParameter("data");
        System.out.print(object);
        JSONObject json =JSONObject.fromObject(object);
        System.out.print(json);
        Project project=new Project();

        String year=json.getString("year");
        String month=json.getString("month");
        String date = year+"-"+month;

        String name=json.getString("Name");
        Project pro1=new Project();
        pro1=projectservice.findByPname(name);
        if(pro1!=null)
            return "error";
        project.setPname(name);
        project.setAddress(json.getString("Place"));
        project.setCompleteinfo(json.getString("work"));
        project.setDescription(json.getString("Content"));
        project.setPartner(json.getString("Partner"));
        project.setCharge(json.getString("Charge"));
        project.setPdata(date);

        model.put("name",name);
        projectservice.save(project);
        return name;
    }

    //审核项目
    @RequestMapping(value = "/changestatus", method = RequestMethod.POST)
    @ResponseBody
    public String changestatus(@RequestParam("description") String description,
                               @RequestParam("verify") String verify,
                               @RequestParam("pname") String pname) throws ParseException {

        String d=description;
        String v=verify;
        String n=pname;

        Project pro1=new Project();
        pro1=projectservice.findByPname(n);
        pro1.setVerify(v);
        pro1.setDescription(d);
        projectservice.saveAndFlush(pro1);
        return "success";
    }

    //显示所有项目
    @RequestMapping(value = "/searchall", method = RequestMethod.GET)
    @ResponseBody
    JSONObject searchall(@RequestParam("id") int id) {
        int r=id-1;
        List<Project> lst=new ArrayList<Project>();
        lst=projectservice.findAll();
        int s=lst.size();
        JSONObject obj=new JSONObject();
        JSONArray name = new JSONArray();
        JSONArray date = new JSONArray();
        JSONArray cop = new JSONArray();

        for(int i=r*10;i<s;i++){
            name.add(lst.get(i).getPname());
        }

        for(int i=r*10;i<s;i++){
            date.add(lst.get(i).getPdata());
        }
        for(int i=r*10;i<s;i++){
            cop.add(lst.get(i).getPartner());
        }

        obj.put("size",s-r*10);
        obj.put("offset",id);
        obj.put("name", name);
        obj.put("date", date);
        obj.put("cop", cop);
        System.out.println(obj);
        return obj;
    }


}

