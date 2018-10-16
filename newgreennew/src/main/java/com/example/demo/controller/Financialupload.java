package com.example.demo.controller;

import com.example.demo.entity.Projectfile;
import com.example.demo.service.ProjectfileService;
import net.sf.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.BufferedOutputStream;
import java.io.File;
import java.io.FileOutputStream;
import java.util.List;

//文件上传的相关操作
@Controller
public class Financialupload {

    @Autowired
    ProjectfileService projectfileService;

    //跳转文件上传页面
    @RequestMapping(value = "/index", method = RequestMethod.GET)
    public String index(ModelMap modelMap,@RequestParam("pname") String name) {
        modelMap.put("name", name);//给上传审核页面传项目号
        modelMap.put("name2", name);
        System.out.println("name:    " + name );
        return "index";
    }

    //新增项目和修改项目中的上传文件功能
    @RequestMapping(value = "/uploadfile", method = RequestMethod.POST)
    @ResponseBody
    public String uploadfile(HttpServletRequest request, HttpServletResponse response) throws Exception {
        //传参
        String project_key=request.getParameter("name");
        System.out.println("name=---------"+project_key);
        //创建项目文件夹如果不存在
        File projectdir =new File("E:/newgreen/"+project_key);
        if  (!projectdir .exists()  && !projectdir .isDirectory()) {
            System.out.println("//不存在2222222");
            projectdir .mkdir();
        }
        else {
            System.out.println("//目录存在2222222222");
        }
        String projectpath = projectdir.getPath();
        System.out.println(projectpath);

        List<MultipartFile> files = ((MultipartHttpServletRequest) request).getFiles("file_government");//文件列表
        if(!files.isEmpty()){
            for(int size = 0; size< files.size(); ++size) {
                MultipartFile file = files.get(size);//第一个文件
                String fileName = file.getOriginalFilename();//文件名带后缀
                System.out.println(fileName);

                String filepath;//自己设定的文件目录
                filepath = projectpath+"/"+fileName;
                System.out.println(filepath);
                BufferedOutputStream stream = new BufferedOutputStream(new FileOutputStream(new File(filepath)));
                stream.write(file.getBytes());
                stream.close();

                    Projectfile projectfile1=new Projectfile();
                    projectfile1.setPname(project_key);
                    projectfile1.setFilename(fileName);
                    projectfile1.setFiletype(null);
                    projectfile1.setFilepath(filepath);
                    projectfile1.setVerify("未审核");
                    projectfileService.save(projectfile1);
            }
        }

        JSONObject imgs = new JSONObject();
        imgs.put("ok","success");
        return imgs.toString();
    }

    //新增项目时上传文件类型 前台参数是name和fff 跳转index
    @RequestMapping(value = "/uploadcase1", method = RequestMethod.POST)
    public String uploadcase(HttpServletRequest request, HttpSession session, ModelMap modelMap,RedirectAttributes attr) throws Exception {
        String pname=request.getParameter("name2");
        System.out.println("前台项目名"+pname);
        modelMap.put("name", pname);//给上传审核页面传项目号
        modelMap.put("name2", pname);
        String type=request.getParameter("fff");
        System.out.println("前台级别"+type);

        List<Projectfile> filelist= projectfileService.findByPname(pname);//数据库中已上传的本项目文件id
        System.out.println("数据库中的文件个数"+filelist.size());

        for (int i = 0; i < filelist.size(); i++)
        {
            Integer fileid=filelist.get(i).getId();
            if(filelist.get(i).getFiletype()==null)
            {
                Projectfile projectfile=new Projectfile();
                projectfile.setId(fileid);
                projectfile.setFilepath(filelist.get(i).getFilepath());
                projectfile.setFilename(filelist.get(i).getFilename());
                projectfile.setVerify(filelist.get(i).getVerify());
                projectfile.setFiletype(type);
                projectfile.setPname(pname);
                projectfileService.save(projectfile);
            }
            else
            {
                Projectfile projectfile=new Projectfile();
                projectfile.setId(fileid);
                projectfile.setFilepath(filelist.get(i).getFilepath());
                projectfile.setFilename(filelist.get(i).getFilename());
                projectfile.setVerify(filelist.get(i).getVerify());
                projectfile.setFiletype(filelist.get(i).getFiletype());
                projectfile.setPname(pname);
                projectfileService.save(projectfile);
            }
        }
        attr.addAttribute("pname",pname);
        return "redirect:/index";
    }


    // 修改项目时上传描述类型1 前台参数是name2和fff2 跳转newfile
    @RequestMapping(value = "/changeuploadcase", method = RequestMethod.POST)
    public String uploadcase111(HttpServletRequest request, HttpSession session, ModelMap modelMap,RedirectAttributes attr) throws Exception {
        String pname=request.getParameter("name2");
        String type=request.getParameter("fff2");
        System.out.println("前台项目名"+pname);
        System.out.println("前台级别"+type);
        modelMap.put("name", pname);//给上传审核页面传项目号
        modelMap.put("name2", pname);

        List<Projectfile> filelist= projectfileService.findByPname(pname);//数据库中已上传的本项目文件id
        System.out.println("数据库找的文件个数"+filelist.size());

        for (int i = 0; i < filelist.size(); i++)
        {
            Integer fileid=filelist.get(i).getId();
            if(filelist.get(i).getFiletype()==null)
            {
                Projectfile projectfile=new Projectfile();
                projectfile.setId(fileid);
                projectfile.setFilepath(filelist.get(i).getFilepath());
                projectfile.setFilename(filelist.get(i).getFilename());
                projectfile.setVerify(filelist.get(i).getVerify());
                projectfile.setFiletype(type);
                projectfile.setPname(pname);
                projectfileService.save(projectfile);
            }
            else
            {
                Projectfile projectfile=new Projectfile();
                projectfile.setId(fileid);
                projectfile.setFilepath(filelist.get(i).getFilepath());
                projectfile.setFilename(filelist.get(i).getFilename());
                projectfile.setVerify(filelist.get(i).getVerify());
                projectfile.setFiletype(filelist.get(i).getFiletype());
                projectfile.setPname(pname);
                projectfileService.save(projectfile);
            }
        }

        attr.addAttribute("pname",pname);
        return "redirect:/newfile";
    }

}

