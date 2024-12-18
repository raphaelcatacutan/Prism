package com.plm.prism.servlet;

import com.plm.prism.dao.DBRead;
import com.plm.prism.entities.*;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.json.JSONArray;
import org.json.JSONObject;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@WebServlet("/view_database")
public class ServletViewDatabase extends HttpServlet {
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
        PrintWriter out = response.getWriter();
        response.setHeader("Access-Control-Allow-Origin", "*");
        response.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
        response.setHeader("Access-Control-Allow-Headers", "Content-Type");
        response.setContentType("application/json");
        JSONArray jsonArray = new JSONArray();

        List<PersonalInfo> personalInfos = DBRead.getAllPersonalInfo();
        Map<Integer, String> sexDesc = DBRead.getSexDesc();
        Map<Integer, String> civilStatusDesc = DBRead.getCivilstatusDesc();
        Map<Integer, String> citizenshipsDesc = DBRead.getRefCitizenshipDesc();

        for (PersonalInfo personalInfo : personalInfos) {
            Map<String, Object> map = new HashMap<>();

            map.put("firstName", personalInfo.getFName());
            map.put("lastName", personalInfo.getLName());
            map.put("civilStatus", civilStatusDesc.get(personalInfo.getCstat().getId()));
            map.put("sex", sexDesc.get(personalInfo.getSex().getId()));
            map.put("citizenship", citizenshipsDesc.get(personalInfo.getCit().getId()));

            ContactInfo contactInfo = DBRead.getContactInfoByPerson(personalInfo).getFirst();
            map.put("email", contactInfo.getEmailAddress());

            JSONObject jsonObject = new JSONObject(map);
            jsonArray.put(jsonObject);
        }

        out.println(jsonArray);
    }
}
