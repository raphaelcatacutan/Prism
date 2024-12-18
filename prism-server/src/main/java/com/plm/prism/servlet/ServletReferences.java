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

@WebServlet("/references")
public class ServletReferences extends HttpServlet {
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
        PrintWriter out = response.getWriter();
        response.setHeader("Access-Control-Allow-Origin", "*");
        response.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
        response.setHeader("Access-Control-Allow-Headers", "Content-Type");
        response.setContentType("application/json");

        JSONArray jsonArray = new JSONArray();
        Map<String, Object> map = new HashMap<>();

        map.put("refCitAcq", DBRead.getAllRefCitAcq());
        map.put("refCitizenship", DBRead.getAllRefCitizenship());
        map.put("refCivilStatus", DBRead.getAllRefCivilstatus());
        map.put("refEducLevel", DBRead.getAllRefEducLevel());
        map.put("refSex", DBRead.getAllRefSex());

        JSONObject jsonObject = new JSONObject(map);
        jsonArray.put(jsonObject);
        out.println(jsonArray);
    }
}
