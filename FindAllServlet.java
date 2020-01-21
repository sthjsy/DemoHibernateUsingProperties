package mypack;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class FindAllServlet  extends HttpServlet
{
public void service(HttpServletRequest req,HttpServletResponse res) throws IOException,ServletException
{
	res.setContentType("text/html");
	PrintWriter out=res.getWriter();
	try {
		Class.forName("com.mysql.jdbc.Driver");
		Connection conn=DriverManager.getConnection("jdbc:mysql://root.cgxmhl2x7mp5.us-east-1.rds.amazonaws.com/user","root","Mysql123");
		String sql="select *from student";
		PreparedStatement pst=conn.prepareStatement(sql);
		ResultSet rs=pst.executeQuery();
		while ((rs.next())) {
			
		out.println("Roll : "+rs.getInt(1));
		out.println("<br>");
		out.println("Name : "+rs.getString(2));
		out.println("<br>");
		out.println("Branch : "+rs.getString(3));
		out.println("<br>");
		out.println("...........................");
		out.println("<br>");
		out.println("<a href='index.html'>Home</a>");
	} 
	}
	catch (Exception e) {
		out.print(e);
		
	}
}


}
