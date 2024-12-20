package com.plm.prism.servlet;

import com.plm.prism.dao.DBDelete;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.json.JSONObject;
import jakarta.servlet.http.HttpServlet;


import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

@WebServlet("/database_delete")
public class ServletDatabaseDelete extends HttpServlet {
    @Override
    protected void doOptions(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        // Set CORS headers for preflight request (OPTIONS)
        resp.setHeader("Access-Control-Allow-Origin", "http://localhost:3000"); // Allow specific origin
        resp.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
        resp.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
        resp.setHeader("Access-Control-Allow-Credentials", "true");
        resp.setStatus(HttpServletResponse.SC_OK); // Respond with status 200
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException {
        response.setHeader("Access-Control-Allow-Origin", "*");
        response.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
        response.setHeader("Access-Control-Allow-Headers", "Content-Type");
        response.setContentType("application/json");

        Map<String, Object> responseMap = new HashMap<>();
        JSONObject jsonObject = DBUtil.parseBody(request.getInputStream());

        // Operation
        int deleteInfo = jsonObject.getInt("deleteInfo");
        DBDelete.deletePersonalInfo(deleteInfo);

        response.getWriter().println(new JSONObject(responseMap));
    }
}
