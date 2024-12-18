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
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@WebServlet("/saved_info")
public class ServletSavedInfo extends HttpServlet {
    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws IOException {
        // String username = req.getParameter("username");
        // String password = req.getParameter("password");
        resp.getWriter().println("User added successfully!");
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
        PrintWriter out = response.getWriter();
        response.setHeader("Access-Control-Allow-Origin", "*");
        response.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
        response.setHeader("Access-Control-Allow-Headers", "Content-Type");
        response.setContentType("application/json");
        String personIdParameter = request.getParameter("person_id");
        int personId = Integer.parseInt(personIdParameter);

        PersonalInfo personInfo = DBRead.getPersonalInfo(personId);
        List<FamilyChild> familyChilds = DBRead.getFamilyChildByPerson(personInfo);
        List<EducBackground> educBackgrounds = DBRead.getEducBackgroundByPerson(personInfo);
        ContactInfo contactInfo = DBRead.getContactInfoByPerson(personInfo).getFirst();
        FamilyBackground familyBackground = DBRead.getFamilyBackgroundByPerson(personInfo).getFirst();

        JSONArray jsonArray = new JSONArray();
        Map<String, Object> map = new HashMap<>();

        map.put("firstName", personInfo.getFName());
        map.put("lastName", personInfo.getLName());
        map.put("middleName", personInfo.getMName());
        map.put("sex", personInfo.getSex());
        map.put("civilStatus", personInfo.getCstat());
        map.put("citizenship", personInfo.getCit());
        map.put("citizenshipAcq", personInfo.getCitAcq());
        map.put("dateOfBirth", personInfo.getDob());
        map.put("placeOfBirth", personInfo.getPob());
        map.put("height", personInfo.getHeight());
        map.put("weight", personInfo.getWeight());
        map.put("bloodType", personInfo.getBloodType());
        map.put("gsis", personInfo.getGsisNo());
        map.put("pagibig", personInfo.getPagibigId());
        map.put("philHealth", personInfo.getPhilhealthId());
        map.put("sss", personInfo.getSssNo());
        map.put("tin", personInfo.getTin());
        map.put("agency", personInfo.getAgencyEmpno());

        map.put("resHouseNo", contactInfo.getResHouseNo());
        map.put("resHouseSt", contactInfo.getResHouseStreet());
        map.put("resHouseVil", contactInfo.getResVillage());
        map.put("resBrgy", contactInfo.getResBgy());
        map.put("resCity", contactInfo.getResCitymun());
        map.put("resProv", contactInfo.getResProv());
        map.put("resZipCode", contactInfo.getResZipcode());
        map.put("permHouseNo", contactInfo.getPermHouseNo());
        map.put("permHouseSt", contactInfo.getPermHouseStreet());
        map.put("permHouseVil", contactInfo.getPermVillage());
        map.put("permBrgy", contactInfo.getPermBgy());
        map.put("permCity", contactInfo.getPermCitymun());
        map.put("permProv", contactInfo.getPermProv());
        map.put("permZipCode", contactInfo.getPermZipcode());
        map.put("telNo", contactInfo.getTelNo());
        map.put("mobileNo", contactInfo.getMobileNo());
        map.put("emailAd", contactInfo.getEmailAddress());

        map.put("spouseLastName", familyBackground.getSpouseLname());
        map.put("spouseFirstName", familyBackground.getSpouseFname());
        map.put("spouseMiddleName", familyBackground.getSpouseMname());
        map.put("spouseOccupation", familyBackground.getSpouseOccupation());
        map.put("spouseEmployer", familyBackground.getSpouseEmployer());
        map.put("spouseEmployerAddress", familyBackground.getSpouseEmpAddress());
        map.put("fatherLastName", familyBackground.getFatherLname());
        map.put("fatherFirstName", familyBackground.getFatherFname());
        map.put("fatherMiddleName", familyBackground.getFatherMname());
        map.put("motherFirstName", familyBackground.getMotherMnFname());
        map.put("motherLastName", familyBackground.getMotherMnLname());
        map.put("motherMiddleName", familyBackground.getMotherMnFname());

        List<Map<String, Object>> children = new ArrayList<>();
        for (FamilyChild famChild : familyChilds) {
            Map<String, Object> child = new HashMap<>();
            child.put("fullName", famChild.getChildDob());
            child.put("dateOfBirth", famChild.getChildDob());
            children.add(child);
        }
        map.put("children", children);

        List<Map<String, Object>> educations = new ArrayList<>();
        for (EducBackground educBackground : educBackgrounds) {
            Map<String, Object> education = new HashMap<>();
            education.put("educLevel", educBackground.getEducLevel());
            education.put("school", educBackground.getSchool());
            education.put("degree", educBackground.getDegree());
            education.put("dateFrom", educBackground.getEdateFrom());
            education.put("dateTo", educBackground.getEdateTo());
            education.put("unitsEarned", educBackground.getUnitsEarned());
            education.put("yearGrad", educBackground.getYearGrad());
            education.put("honors", educBackground.getHonors());
            educations.add(education);
        }
        map.put("educations", educations);

        JSONObject jsonObject = new JSONObject(map);
        jsonArray.put(jsonObject);
        out.println(jsonArray);
    }
}
