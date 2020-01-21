package mypack;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class AddServlet extends HttpServlet {
	public void service(HttpServletRequest req, HttpServletResponse res) throws IOException, ServletException {
		res.setContentType("text/html");
		PrintWriter out = res.getWriter();
		Integer roll = Integer.parseInt(req.getParameter("roll"));
		String name = req.getParameter("name");
		String branch = req.getParameter("branch");
		try {
			Class.forName("com.mysql.jdbc.Driver");
			Connection conn = DriverManager.getConnection(
					"jdbc:mysql://root.cgxmhl2x7mp5.us-east-1.rds.amazonaws.com/user", "root", "Mysql123");
			String sql = "insert into student values(?,?,?)";
			PreparedStatement pst = conn.prepareStatement(sql);

			pst.setInt(1, roll);
			pst.setString(2, name);
			pst.setString(3, branch);
			pst.executeUpdate();
			out.println("Record Added");
			out.println("<br>");
			out.println("<a href='index.html'>Home</a>");
		} catch (Exception e) {
			out.print(e);

		}
	}

}
