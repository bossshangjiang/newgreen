package com.example.demo.controller;

import com.example.demo.entity.User_test;
import com.example.demo.entity.Project;
import com.example.demo.service.*;
import com.example.demo.service.IUser_test;
import net.sf.json.JSONArray;
import net.sf.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.util.ArrayList;
import java.util.List;

@Controller
public class UserController {

    //调用user service
    @Autowired
    IUser_test iUser_test;

    //登录页面 系统功能页面 联系我们页面
    @RequestMapping(value = "/login")
    public String login() {
        return "login";
    }

    @RequestMapping(value = "/gongneng")
    public String gongneng() {
        return "gongneng";
    }

    @RequestMapping(value = "/lianxi")
    public String lianxi() {
        return "lianxi";
    }

    @RequestMapping(value="/accountmanage")
    public String accountmanage(){return "accountmanage";}

    //登录验证
    @RequestMapping(value = "/postData", method = RequestMethod.POST)
    @ResponseBody
    public String postData(String number, String pwd, HttpSession session,ModelMap modelMap) {
        System.out.println("-----------ui---" + number + " " + pwd);
        String num = number;
        String p = pwd;

        if (num.equals("111") && pwd.equals("123")) {
            session.setAttribute("type", "manager");
            session.setAttribute("jobnumber",num);
            return "success_manager";
        }
//       User_test user2 = new User_test();
//        user2.setJob_number(num);
        User_test user1 = iUser_test.findByJobnumber(num);
        if (user1.getName() == "") {
            return "notexist";
        }
        if (user1.getPwd().equals(p)&&user1.getAuthority().equals("manager")) {
            session.setAttribute("type", "manager");
            session.setAttribute("jobnumber",num);
            return "success_manager";
        }

        if (user1.getPwd().equals(p)&&user1.getAuthority()!="manager") {
            session.setAttribute("type", "user");
            session.setAttribute("jobnumber",num);
            return "success_user";
        }
        if (user1.getPwd() != p) {
            return "fail";
        }

        return "error";
    }

    //跳转主页
    @RequestMapping(value = "/home", method = RequestMethod.GET)
    public String tohome(HttpSession session,ModelMap modelMap) {
        if(session.getAttribute("type")!="manager"){
            modelMap.put("type", 0);
        }
        else
            modelMap.put("type",1);
        return "home";
    }

    //跳转注册
    @RequestMapping(value = "/signup", method = RequestMethod.GET)
    public String signup() {
        return "signup";
    }

    //内部服务器错误
    @RequestMapping(value = "/http_500", method = RequestMethod.GET)
    public String http_500() {
        return "500";
    }

    //普通用户注册
    @RequestMapping(value = "/signup", method = RequestMethod.POST)
    @ResponseBody
    public String usersignup(String username,String usernumber, String userpwd, String useremail) {
        String e=useremail;
        String num=usernumber;
        String p=userpwd;
        String n=username;
        System.out.println(num);
        User_test user2=iUser_test.findByJobnumber(num);
        if(user2!=null){
            return "exist";
        }
        User_test user1=new User_test();
        user1.setJob_number(num);
        user1.setName(n);
        user1.setPwd(p);
        user1.setAuthority("user");
        System.out.println(user1.getAuthority());
        iUser_test.save(user1);

        return "success";
    }

    //登出
    @RequestMapping(value = "/logout", method = RequestMethod.GET)
    public String logout(HttpSession session) {
        session.removeAttribute("id");
        session.removeAttribute("type");
        session.removeAttribute("email");
        return "login";
    }

    //改变用户级别
    @RequestMapping(value = "/uplevel", method = RequestMethod.POST)
    @ResponseBody
    String uplevel(String number) {
        User_test user=new User_test();
        user=iUser_test.findByJobnumber(number);
        user.setAuthority("manager");
        iUser_test.saveAndFlush(user);
        return "success";
    }

    //跳转修改密码
    @RequestMapping(value = "/passwordmanage")
    public String passwordmanage() {
        return "passwordmanage";
    }

    //修改密码
    @RequestMapping(value = "/passmanage", method = RequestMethod.POST)
    @ResponseBody
    public String passmanage(String number, String pwd, HttpSession session) {
        String password1=number;
        String password2=pwd;
        String jobnum= (String) session.getAttribute("jobnumber");
        User_test user=new User_test();
        user=iUser_test.findByJobnumber(jobnum);
        System.out.println(user.getPwd()+"ssssssssssssssssssss");
        System.out.println(password1+"ssssssssssssssssssss");
        if(user.getPwd().equals(password1)){
            user.setPwd(password2);
            iUser_test.saveAndFlush(user);
            return "success";
        }
        else{
            return "error";
        }
    }

    //跳转显示用户
    @RequestMapping(value = "/showusers")
    public String showusers() {
        return "showusers";
    }

    //显示所有用户
    @RequestMapping(value = "/showall", method = RequestMethod.GET)
    @ResponseBody
    JSONObject showall(@RequestParam("id") int id) {
        int r=id-1;
        List<User_test> lst= new ArrayList<>();
        lst=iUser_test.findAll();
        int s=lst.size();
        JSONObject obj=new JSONObject();
        JSONArray name = new JSONArray();
        JSONArray jobnumber = new JSONArray();
        JSONArray password = new JSONArray();

        for(int i=r*10;i<s;i++){
            name.add(lst.get(i).getName());
        }

        for(int i=r*10;i<s;i++){
            jobnumber.add(lst.get(i).getJob_number());
        }
        for(int i=r*10;i<s;i++){
            password.add(lst.get(i).getPwd());
        }
        obj.put("size",s-r*10);
        obj.put("offset",id);
        obj.put("name", name);
        obj.put("jobnumber", jobnumber);
        obj.put("password", password);
        System.out.println(obj);
        return obj;
    }

    //删除用户
    @RequestMapping(value = "/deleteuser", method = RequestMethod.POST)
    @ResponseBody
    String deleteuser(String number) {
        User_test user=new User_test();
        user=iUser_test.findByJobnumber(number);
        int id=user.getId();
        iUser_test.delete(id);
        return "success";
    }





}
