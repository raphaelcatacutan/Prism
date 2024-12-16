
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.cfg.Configuration;

import java.io.IOException;
import java.util.List;

@WebServlet("/main")
public class MainServlet extends HttpServlet {
    private SessionFactory sessionFactory;

    @Override
    public void init() throws ServletException {
        super.init();
        // Hibernate initialization
        Configuration configuration = new Configuration().configure();
        sessionFactory = configuration.buildSessionFactory();
    }

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        // Business logic and fetching data via Hibernate
        try (Session session = sessionFactory.openSession()) {
            session.beginTransaction();
            // Query database using Hibernate
            // List<User> entities = session.createQuery("from user", User.class).getResultList();
            // request.setAttribute("entities", entities);
            // session.getTransaction().commit();
        }

        // Pass data to front-end (ShadCN)
        request.getRequestDispatcher("/WEB-INF/views/main.jsp").forward(request, response);
    }

    @Override
    public void destroy() {
        // Cleanup Hibernate session factory
        sessionFactory.close();
    }
}
