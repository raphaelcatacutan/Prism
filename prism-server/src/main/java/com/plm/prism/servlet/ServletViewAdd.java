package com.plm.prism.servlet;

import com.plm.prism.dao.DBRead;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.json.JSONArray;
import org.json.JSONObject;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.HashMap;
import java.util.Map;

@WebServlet("/view_add")
public class ServletViewAdd extends HttpServlet {
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
        PrintWriter out = response.getWriter();
        response.setHeader("Access-Control-Allow-Origin", "*");
        response.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
        response.setHeader("Access-Control-Allow-Headers", "Content-Type");
        response.setContentType("application/json");

        Map<Integer, String> sexDesc = DBRead.getSexDesc();
        Map<Integer, String> civilStatusDesc = DBRead.getCivilstatusDesc();
        Map<Integer, String> citizenshipsDesc = DBRead.getRefCitizenshipDesc();
        Map<Integer, String> citizenAcq = DBRead.getRefCitAcqDesc();
        Map<Integer, String> educLevelDesc = DBRead.getEducLevelDesc();

        Map<String, Map<Integer, String>> map = new HashMap<>();

        map.put("sexDesc", sexDesc);
        map.put("civilStatusDesc", civilStatusDesc);
        map.put("citizenshipsDesc", citizenshipsDesc);
        map.put("citizenAcq", citizenAcq);
        map.put("educLevelDesc", educLevelDesc);

        JSONArray jsonArray = new JSONArray();

        JSONObject jsonObject = new JSONObject(map);
        jsonArray.put(jsonObject);

        out.println(jsonArray);
    }
}
