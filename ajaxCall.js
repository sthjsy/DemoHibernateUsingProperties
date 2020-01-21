<!DOCTYPE html>
<html lang="en">
    <head>
        <title>Bootstrap Example</title>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"></script>
        <style>
            h4{
                color:yellowgreen;
            }
            h2{
                color:blue;
            }
            #addRow
            {
                float: right;
            }
        </style>
    </head>
    <body>
        <!-- Navbar -->

        <div class="container-fluid mt-2">
            <nav class="navbar navbar-expand-sm bg-success navbar-dark">
                <ul class="navbar-nav">
                    <li class="nav-item active">
                        <a class="nav-link" href="#">Logo</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Signup</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Login</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link disabled" href="#">Disabled</a>
                    </li>
                </ul>
            </nav>
        </div>
        <!--Login page-->
        <div class="container">
            <h3 class="text-capitalize text-center mt-2">Registration Page</h3>
            <hr class="w-25 mx-auto pt-2 pb-2">
        </div>
        <div class="container">
            <div class="container pt-1 border border-info rounded-sm">
                <h4>Employee Personal Details</h4>
                <hr>
                <div class="jumbotron">
                    <div class="row">
                        <div class="col-sm-2 text-primary"><label for="fname">First Name</label></div>
                        <div class="col-sm-4"><input type="text" class="form-control singleData" id="fname" name="fname" placeholder="First Name" required></div>
                        <div class="col-sm-2 text-primary"><label for="lname">Last Name</label></div>
                        <div class="col-sm-4"><input type="text" class="form-control singleData" id="lname" name="lname" placeholder="Last Name" required></div>
                    </div>
                    <div class="row">
                        <div class="col-sm-2 text-primary"><label for="fathername">Father Name</label></div>
                        <div class="col-sm-4"><input type="text" id="fathername" name="fathername" class="form-control singleData" placeholder="Father's Name" required></div>
                        <div class="col-sm-2 text-primary"><label for="gender">Gender</label></div>
                        <div class="col-sm-4"><select class="browser-default custom-select singleData" id="gender">
                                <option selected >Select Gender</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                            </select>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-2 text-primary"><label for="dob">Date of Birth</label></div>
                        <div class="col-sm-4"><input type="date" id="dob" class="form-control singleData" name="dob" placeholder="" required></div>
                        <div class="col-sm-2 text-primary"><label for="adhar">Adhar Card Number</label></div>
                        <div class="col-sm-4"><input type="text" id="adhar" class="form-control singleData" name="adhar" ></div>
                    </div>
                    <div class="row">
                        <div class="col-sm-2 text-primary"><label for="pswd">Password</label></div>
                        <div class="col-sm-4"><input type="text" id="pswd" name="pswd" class="form-control singleData" required></div>
                        <div class="col-sm-2 text-primary"><label for="category">Category</label></div>
                        <div class="col-sm-4"><select class="browser-default custom-select singleData" id="category">
                                <option selected >Select Gender</option>
                                <option value="general">General</option>
                                <option value="obc">OBC</option>
                                <option value="sc">SC</option>
                                <option value="st">ST</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div> 
            <div class="container pt-1 border border-info rounded-sm">
                <h4>Employee Contact Details</h4>
                <hr>
                <div class="jumbotron">
                    <div class="row">
                        <div class="col-sm-2 text-primary"><label for="mobilenumber">Mobile Number</label></div>
                        <div class="col-sm-4"><input type="text" id="mobilenumber" class="form-control singleData" name="mobilenumber" placeholder="" required></div>
                        <div class="col-sm-2 text-primary"><label for="email">E Mail Address</label></div>
                        <div class="col-sm-4"><input type="email" id="email" class="form-control singleData" name="email" placeholder="" required></div>
                    </div>
                    <div class="row">
                        <div class="col-sm-2 text-primary"><label for="altmobilenumber">Alternate Mobile Number</label></div>
                        <div class="col-sm-4"><input type="text" id="altmobilenumber" class="form-control singleData" name="altmobilenumber" placeholder="" required></div>
                        <div class="col-sm-2 text-primary"><label for="altemail">Alternate EMail Address</label></div>
                        <div class="col-sm-4"><input type="text" id="altemail" class="form-control singleData"  name="altemail" placeholder="" required></div>
                    </div>
                    <h4 class="">Permanent Address</h4>
                    <hr class="w-25 mx-1 pt-2 pb-2">
                    <div class="row">
                        <div class="col-sm-2 text-primary"><label for="street">Street</label></div>
                        <div class="col-sm-4"><input type="text" id="perstreet" class="form-control singleData" name="street" placeholder="" required></div>
                        <div class="col-sm-2 text-primary"><label for="pin">Pin Code</label></div>
                        <div class="col-sm-4"><input type="text" id="perpin" class="form-control singleData" name="pin" placeholder="" required></div>

                    </div>
                    <!--                    <div class="row">
                                        </div>-->
                    <div class="row">
                        <div class="col-sm-2 text-primary"><label for="city">City</label></div>
                        <div class="col-sm-4"><input type="text" id="percity" class="form-control singleData" name="city" placeholder="" required></div>
                        <div class="col-sm-2 text-primary"><label for="state">State</label></div>
                        <div class="col-sm-4"><input type="text" id="perstate" class="form-control singleData" name="state" placeholder="" required></div>

                    </div>
                    <h4 class="">Current Address</h4>
                    <hr class="w-25 ml-1 pt-2 pb-2">
                    <div class="row">
                        <div class="col-sm-2 text-primary"><label for="street">Street</label></div>
                        <div class="col-sm-4"><input type="text" id="curstreet" class="form-control singleData" name="street" placeholder="" required></div>
                        <div class="col-sm-2 text-primary"><label for="pincode">Pin Code</label></div>
                        <div class="col-sm-4"><input type="text" id="curpin" class="form-control singleData" name="pincode" placeholder="" required></div>

                    </div>
                   
                    <div class="row">
                        <div class="col-sm-2 text-primary"><label for="city">City</label></div>
                        <div class="col-sm-4"><input type="text" id="curcity" class="form-control" name="pin" placeholder="" required></div>
                        <div class="col-sm-2 text-primary"><label for="state">State</label></div>
                        <div class="col-sm-4"><input type="text" id="curstate" class="form-control singleData" name="state" placeholder="" required></div>
                    </div>
                </div>
            </div>
            <div class="container pt-1 border border-info rounded-sm">
                <h4>Employee Previous Records</h4>
                <hr>
                <div class="jumbotron">
                    <div class="row">
                        <div class="col-sm-3 text-primary"><label for="yoe">Year of Experience</label></div>
                        <div class="col-sm-3"><input type="text" id="yoe" class="form-control singleData" name="yoe" placeholder="" required></div>
                        <div class="col-sm-3 text-primary"><label for="lCompany">Last Organization</label></div>
                        <div class="col-sm-3"><input type="text" id="lastorg" class="form-control singleData" name="lcompany" placeholder="" required></div>
                    </div>
                </div>
            </div>
            <div class="container pt-1 border border-info rounded-sm">
                <h4>Education Details </h4>
                <hr>
                <div class="jumbotron">
                    <table class="table table-bordered" id="eduTable">
                        <thead>
                            <tr>
                                <th>S.No</th>
                                <th>University Name</th>
                                <th>Course</th>
                                <th>Board</th>
                                <th>Year of Passing</th>
                                <th><input type="button" class="btn btn-primary" id="addRow" onclick="addEduRow();" value="ADD"></th>
                            </tr>
                        </thead>
                        <tbody id="EduTBody">
                            <tr>
                                <td>1</td>
                                <td class="text-primary"><input id="name" type="text" name="Uni_Name_0" class="form-control"></td>
                                <td class="text-primary"><input id="course" type="text" name="Uni_Course_0" class="form-control"></td>
                                <td class="text-primary"><input id="board" type="text" name="Uni_Board_0" class="form-control"></td>
                                <td class="text-primary"><input id="yop" type="text" name="Uni_yop_0" class="form-control"></td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                    <input type="submit" class="btn btn-primary text-center" value="submitdata" onclick="insertData();">
                </div>
            </div>
        </div> 
        <script>
            var count = 1;
            function addEduRow() {
                var html = "<tr>" +
                        "<td>" + (count + 1) + "</td>" +
                        "<td><input type='text' name='Uni_Name_" + (count + 1) + "' class='form-control'></td>" +
                        "<td><input type='text' name='Uni_Course_" + (count + 1) + "' class='form-control'></td>" +
                        "<td><input type='text' name='Uni_Board_" + (count + 1) + "' class='form-control'></td>" +
                        "<td><input type='text' name='Uni_yop_" + (count + 1) + "' class='form-control'></td>" +
                        "<td><input type='button' class='btn btn-danger' id='removeRow' onclick='removeEduRow(id);' value='Remove'></td>" +
                        "</tr>";
                $("#eduTable").append(html);
                count++;
            }
            function removeEduRow(id)
            {
                console.log(id);
                $("#" + id).closest("tr").remove();
                count--;
            }
            function insertData()
            {

                $.ajax({
                    type: "POST",
                    url: "Insert",
//                    contentType: "application/json", // NOT dataType!
//                    data: "Name=Mahima&Age=20&sub=CSE",
//                    data: JSON.stringify(DataMAp),
                    data:
                            {
                                lname: $("#lname").val(),
                                fname: $("#fname").val(),
                                fathername: $("#fathername").val(),
                                dob: $("#dob").val(),
                                adhar: $("#adhar").val(),
                                pswd: $("#pswd").val(),
                                category: $("#category").val(),
                                gender: $("#gender").val(),
                                email:$("#email").val(),
                                mobilenumber: $("#mobilenumber").val(),
                                altmobilenumber:$("#altmobilenumber").val(),
                                altemail:$("#altemail").val(),
                                perstreet:$("#perstreet").val(),
                                perpin:$("#perpin").val(),
                                percity:$("#percity").val(),
                                perstate:$("#perstate").val(),
                                curstreet:$("#curstreet").val(),
                                curpin:$("#curpin").val(),
                                curcity:$("#curcity").val(),
                                curstate:$("#curstate").val(),
                                yoe:$("#yoe").val(),
                                lastorg:$("#lastorg").val(),
                            },
                    success: function (response) {
                        alert(response);
                        $("#fname").val(response);
                    }
                });
            }

        </script>

    </body>
</html>
-------------------------------------------------------------------------------------------------------------
                /*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package controller;

import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import model.Employee;
import dao.EmployeeDao;

public class Insert extends HttpServlet {
    
    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html");
        PrintWriter out = response.getWriter();
        
        try {
//            System.out.println("DataMAp " + request.);
            System.out.println("jf");
            String fname = request.getParameter("fname");
            String fathername = request.getParameter("fathername");
            String lname = request.getParameter("lname");
            String dob = request.getParameter("dob");
            String adhar = request.getParameter("adhar");
            String pswd = request.getParameter("pswd");
            String category = request.getParameter("category");
            String gender = request.getParameter("gender");
            String mobilenumber = request.getParameter("mobilenumber");
            String email = request.getParameter("email");
            String altmobilenumber = request.getParameter("altmobilenumber");
            String altemail = request.getParameter("altemail");
            String perstreet = request.getParameter("perstreet");
            String perpin = request.getParameter("perpin");
            String percity = request.getParameter("percity");
            String perstate = request.getParameter("perstate");
            String curstreet = request.getParameter("curstreet");
            String curpin = request.getParameter("curpin");
            String curcity = request.getParameter("curcity");
            String curstate = request.getParameter("curstate");
            String yoe = request.getParameter("yoe");
            String lastorg = request.getParameter("lastorg");
            System.out.println("perstreet :: " + perstreet);
            System.out.println("perpin :: " + perpin);
            System.out.println("percity :: " + percity);
            System.out.println("perstate :: " + perstate);
            System.out.println("curstate :: " + curstate);
            System.out.println("fathername :: " + fathername);
            System.out.println("mobilenumber :: " + mobilenumber);
            System.out.println("email :: " + email);
            System.out.println("altmobilenumber :: " + altmobilenumber);
            System.out.println("altemail :: " + altemail);
            System.out.println("pswd :: " + pswd);
            System.out.println("lname :: " + lname);
            System.out.println("fname :: " + fname);
            System.out.println("gender :: " + gender);
            System.out.println("category :: " + category);
            System.out.println("dob :: " + dob);
            System.out.println("adhar :: " + adhar);
        
            Employee emp = new Employee();
            emp.setFname(fname);
            emp.setLname(lname);
            emp.setFathername(fathername);
            emp.setDob(dob);
            emp.setAdhar(adhar);
            emp.setPswd(pswd);
            emp.setCategory(category);
            emp.setGender(gender);
            emp.setEmail(email);
            emp.setMobilenumber(mobilenumber);
            emp.setAltemail(altemail);
            emp.setAltmobilenumber(altmobilenumber);
            emp.setPerstreet(perstreet);
            emp.setPerpin(perpin);
            emp.setPercity(percity);
            emp.setPerstate(perstate);
            emp.setCurstreet(curstreet);
            emp.setCurpin(curpin);
            emp.setCurstate(curstate);
            emp.setCurcity(curstate);
            emp.setYoe(yoe);
            emp.setLastOrg(lastorg);
            
            EmployeeDao empdao = new EmployeeDao();
            System.out.println(empdao.insert(emp) + "Employee Register");
            out.print(empdao.insert(emp) + "Employee Register");
            
        } catch (Exception ex) {
            ex.printStackTrace();
        }
            
    }

    // <editor-fold defaultstate="collapsed" desc="HttpServlet methods. Click on the + sign on the left to edit the code.">
    /**
     * Handles the HTTP <code>GET</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    /**
     * Handles the HTTP <code>POST</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    /**
     * Returns a short description of the servlet.
     *
     * @return a String containing servlet description
     */
    @Override
    public String getServletInfo() {
        return "Short description";
    }// </editor-fold>

}
------------------------------------------------------------------------------------------------------
package model;
public class Employee {
   private String fname;
private String lname;
private String fathername;
private String dob;
private String adhar;
private String pswd;

private String category;
private String gender;
private String email;
private String mobilenumber;
private String altmobilenumber;
private String altemail;
private String perstreet;
private String perpin;
private String percity;
private String perstate;
private String curstreet;
private String curcity;
private String curpin;
private String curstate;
private String yoe;
private String lastOrg;


  public String getFname() {
        return fname;
    }
  public void setFname(String fname) {
        this.fname = fname;
    }
  public String getLname() {
        return lname;
  }
   public void setLname(String lname) {
        this.lname = lname;
    }
 public String getFathername() {
        return fathername;
 }
   public void setFathername(String fathername) {
        this.fathername = fathername;
    }
public String getDob() {
        return dob;
    }

   public void setDob(String dob) {
        this.dob = dob;
    }
public String getAdhar() {
        return adhar;
    }
 public void setAdhar(String adhar) {
        this.adhar = adhar;
    }
 public String getPswd() {
        return pswd;
    }
public void setPswd(String pswd) {
        this.pswd = pswd;
    }

    /**
     * @return the category
     */
    public String getCategory() {
        return category;
    }

    /**
     * @param category the category to set
     */
    public void setCategory(String category) {
        this.category = category;
    }

    /**
     * @return the gender
     */
    public String getGender() {
        return gender;
    }

    /**
     * @param gender the gender to set
     */
    public void setGender(String gender) {
        this.gender = gender;
    }

    /**
     * @return the email
     */
    public String getEmail() {
        return email;
    }

    /**
     * @param email the email to set
     */
    public void setEmail(String email) {
        this.email = email;
    }

    /**
     * @return the mobilenumber
     */
    public String getMobilenumber() {
        return mobilenumber;
    }

    /**
     * @param mobilenumber the mobilenumber to set
     */
    public void setMobilenumber(String mobilenumber) {
        this.mobilenumber = mobilenumber;
    }

    /**
     * @return the altmobilenumber
     */
    public String getAltmobilenumber() {
        return altmobilenumber;
    }

    /**
     * @param altmobilenumber the altmobilenumber to set
     */
    public void setAltmobilenumber(String altmobilenumber) {
        this.altmobilenumber = altmobilenumber;
    }

    /**
     * @return the altemail
     */
    public String getAltemail() {
        return altemail;
    }

    /**
     * @param altemail the altemail to set
     */
    public void setAltemail(String altemail) {
        this.altemail = altemail;
    }

    /**
     * @return the perstreet
     */
    public String getPerstreet() {
        return perstreet;
    }

    /**
     * @param perstreet the perstreet to set
     */
    public void setPerstreet(String perstreet) {
        this.perstreet = perstreet;
    }

    /**
     * @return the perpin
     */
    public String getPerpin() {
        return perpin;
    }

    /**
     * @param perpin the perpin to set
     */
    public void setPerpin(String perpin) {
        this.perpin = perpin;
    }

    /**
     * @return the percity
     */
    public String getPercity() {
        return percity;
    }

    /**
     * @param percity the percity to set
     */
    public void setPercity(String percity) {
        this.percity = percity;
    }

    /**
     * @return the perstate
     */
    public String getPerstate() {
        return perstate;
    }

    /**
     * @param perstate the perstate to set
     */
    public void setPerstate(String perstate) {
        this.perstate = perstate;
    }

    /**
     * @return the curstreet
     */
    public String getCurstreet() {
        return curstreet;
    }

    /**
     * @param curstreet the curstreet to set
     */
    public void setCurstreet(String curstreet) {
        this.curstreet = curstreet;
    }

    /**
     * @return the curcity
     */
    public String getCurcity() {
        return curcity;
    }

    /**
     * @param curcity the curcity to set
     */
    public void setCurcity(String curcity) {
        this.curcity = curcity;
    }

    /**
     * @return the curpin
     */
    public String getCurpin() {
        return curpin;
    }

    /**
     * @param curpin the curpin to set
     */
    public void setCurpin(String curpin) {
        this.curpin = curpin;
    }

    /**
     * @return the curstate
     */
    public String getCurstate() {
        return curstate;
    }

    /**
     * @param curstate the curstate to set
     */
    public void setCurstate(String curstate) {
        this.curstate = curstate;
    }

    /**
     * @return the yoe
     */
    public String getYoe() {
        return yoe;
    }

    /**
     * @param yoe the yoe to set
     */
    public void setYoe(String yoe) {
        this.yoe = yoe;
    }

    /**
     * @return the lastOrg
     */
    public String getLastOrg() {
        return lastOrg;
    }

    /**
     * @param lastOrg the lastOrg to set
     */
    public void setLastOrg(String lastOrg) {
        this.lastOrg = lastOrg;
    }
 
}
------------------------------------------------------------------------------------
package dao;

import model.*;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import javax.resource.cci.ResultSet;

public class EmployeeDao {

    private Connection conn;
    private PreparedStatement pst;
    private ResultSet rs;

    public EmployeeDao() throws Exception {
        Class.forName("oracle.jdbc.driver.OracleDriver");
        conn = DriverManager.getConnection("jdbc:oracle:thin:@192.168.1.24:1521:orcl", "C##test_admin", "system123#");
    }

    public int insert(Employee employee) throws Exception {
        pst = conn.prepareStatement("insert into JASVEER_YDV_EMPLOYEE_DATA values(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)");
        pst.setString(1, employee.getFname());
        pst.setString(2, employee.getLname());
        pst.setString(3, employee.getFathername());
        pst.setString(4, employee.getDob());
        pst.setString(5, employee.getAdhar());
        pst.setString(6, employee.getPswd());
        pst.setString(7, employee.getCategory());
        pst.setString(8, employee.getGender());
        pst.setString(9, employee.getEmail());
        pst.setString(10, employee.getMobilenumber());
        pst.setString(11, employee.getAltmobilenumber());
        pst.setString(12, employee.getAltemail());
        pst.setString(13, employee.getPerstreet());
        pst.setString(14, employee.getPerpin());
        pst.setString(15, employee.getPercity());
        pst.setString(16, employee.getPerstate());
        pst.setString(17, employee.getCurstreet());
        pst.setString(18, employee.getCurpin());
        pst.setString(19, employee.getCurcity());
        pst.setString(20, employee.getCurstate());
        pst.setString(21, employee.getYoe());
        pst.setString(22, employee.getLastOrg());
        boolean execute = pst.execute();
        if(execute)
        return 1;
        else
            return 0;
    }
}

