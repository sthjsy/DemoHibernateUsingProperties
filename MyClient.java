package mypack;

import java.io.FileInputStream;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.Properties;

import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.cfg.Configuration;

public class MyClient extends HttpServlet {

	public void service(HttpServletRequest req, HttpServletResponse res) throws IOException {
		res.setContentType("text/html");
		PrintWriter out = res.getWriter();

		Integer eno = Integer.parseInt(req.getParameter("eno"));
		String ename = req.getParameter("ename");
		Integer esal = Integer.parseInt(req.getParameter("esal"));

		Emp emp = new Emp();
		emp.setEno(eno);
		emp.setEname(ename);
		emp.setEsal(esal);

		FileInputStream fis=new FileInputStream("C:\\Users\\LeNoVo\\workspace_Oxygen\\DemoHibernateUsingProperties\\src\\hibernate.properties");
		Properties p=new Properties();
		p.load(fis);
		
		Configuration cfg = new Configuration();
		cfg.setProperties(p);
		//Mapping File
		cfg.addFile("C:\\Users\\LeNoVo\\workspace_Oxygen\\DemoHibernateUsingProperties\\src\\mypack\\Emp.hbm.xml");
		SessionFactory sf = cfg.buildSessionFactory();
		Session s = sf.openSession();
		Transaction t = s.beginTransaction();
		 s.save(emp); //save() always return a Object ,that is next primary
		// key
		// s.persist(emp); //persist() return type is null ,So you can not run
		// persist() method if primary key exist in database
		s.saveOrUpdate(emp);
		// s.update(emp); //update record if exist otherwise store as new record
		// s.delete(emp);
		/*
		try {
			Object o = s.load(Emp.class, eno);
			Emp e = (Emp) o;
			out.println("Emp No. " + e.getEno() + "<br>" + "Emp Name " + e.getEname() + "<br>" + "Emp Salary "
					+ e.getEsal() + "<br>");

			
		} catch (Exception e) {
			out.print(e);
		}
		*/
		t.commit();
		s.close();
		sf.close();

		out.println("Save..........");
	}

}
