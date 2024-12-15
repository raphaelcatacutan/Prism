package com.plm.infoman.database;

import com.plm.infoman.entities.PersonalInfo;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.cfg.Configuration;

import java.io.IOException;

@WebServlet("/add-user")
public class DBServlet extends HttpServlet {
    private static SessionFactory sessionFactory;

    @Override
    public void init() throws ServletException {
        sessionFactory = new Configuration().configure("hibernate.cfg.xml").addAnnotatedClass(PersonalInfo.class).buildSessionFactory();
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        // String username = req.getParameter("username");
        // String password = req.getParameter("password");

        try (Session session = sessionFactory.openSession()) {
            session.beginTransaction();

            resp.getWriter().println("User added successfully!");
        } catch (Exception e) {
            resp.getWriter().println("Error: " + e.getMessage());
        }
    }

    @Override
    public void destroy() {
        if (sessionFactory != null) sessionFactory.close();
    }
}
