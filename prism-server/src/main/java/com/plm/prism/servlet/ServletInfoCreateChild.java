package com.plm.prism.servlet;

import com.plm.prism.dao.DBCreate;
import com.plm.prism.dao.DBRead;
import com.plm.prism.entities.*;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.json.JSONObject;

import java.io.IOException;
import java.time.LocalDate;
import java.util.HashMap;
import java.util.Map;

@WebServlet("/info_create_child")
public class ServletInfoCreateChild extends HttpServlet {
    @Override
    protected void doOptions(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        // Set CORS headers for preflight request (OPTIONS)
        resp.setHeader("Access-Control-Allow-Origin", "*"); // Allow specific origin
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

        JSONObject jsonObject = DBUtil.parseBody(request.getInputStream());

        PersonalInfo personalInfo = DBRead.getPersonalInfo(Integer.parseInt(jsonObject.getString("personId")));
        FamilyChild familyChild = new FamilyChild();
        familyChild.setChildFullname(jsonObject.getString("fullName"));
        familyChild.setP(personalInfo);
        // familyChild.setChildDob(LocalDate.parse(jsonObject.getString("dateOfBirth")));
        DBCreate.createFamilyChildren(familyChild);


        Map<String, Object> responseMap = new HashMap<>();
        response.getWriter().println(new JSONObject(responseMap));
    }
}
