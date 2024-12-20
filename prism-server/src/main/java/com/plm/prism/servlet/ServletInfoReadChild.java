package com.plm.prism.servlet;

import com.plm.prism.dao.DBRead;
import com.plm.prism.entities.*;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.json.JSONObject;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@WebServlet("/info_read_child")
public class ServletInfoReadChild extends HttpServlet {
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
        PrintWriter out = response.getWriter();
        response.setHeader("Access-Control-Allow-Origin", "*");
        response.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
        response.setHeader("Access-Control-Allow-Headers", "Content-Type");
        response.setContentType("application/json");

        List<Map<String, Object>> list = new ArrayList<>();

        String personIdParameter = request.getParameter("person_id");
        if (personIdParameter == null) out.println((new JSONObject(list)));
        else {
            try {
                int personId = Integer.parseInt(personIdParameter);

                PersonalInfo personInfo = DBRead.getPersonalInfo(personId);
                if (personInfo == null) out.println((new JSONObject(list)));
                else {
                    List<FamilyChild> familyChilds = DBRead.getFamilyChildByPerson(personInfo);

                    for (FamilyChild familyChild : familyChilds) {
                        Map<String, Object> map = new HashMap<>();
                        map.put("id", familyChild.getId());
                        map.put("fullName", familyChild.getChildFullname());
                        map.put("dateOfBirth", familyChild.getChildDob());

                        list.add(map);
                    }

                    JSONObject jsonObject = new JSONObject(list);
                    out.println(jsonObject);
                }
            } catch (NumberFormatException e) {
                out.println((new JSONObject(list)));
            }
        }
    }
}
