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

import java.io.BufferedReader;
import java.io.IOException;
import java.io.PrintWriter;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@WebServlet("/saved_info")
public class ServletSavedInfo extends HttpServlet {
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
        PrintWriter out = response.getWriter();
        response.setHeader("Access-Control-Allow-Origin", "*");
        response.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
        response.setHeader("Access-Control-Allow-Headers", "Content-Type");

        response.setContentType("application/json");

        Map<String, Object> responseMap = new HashMap<>();

        try {
            // Parse the JSON body from the request
            StringBuilder jsonBody = new StringBuilder();
            String line;
            try (BufferedReader reader = request.getReader()) {
                while ((line = reader.readLine()) != null) {
                    jsonBody.append(line);
                }
            }

            JSONObject requestBody = new JSONObject(jsonBody.toString());

            RefSex refSex = DBRead.getRefSex(1);
            RefCivilstatus refCivilStatus = DBRead.getRefCivilstatus(1);
            RefCitizenship citizenship = DBRead.getRefCitizenship(1);
            RefCitAcq refCitAcq = DBRead.getRefCitAcq(1);

            PersonalInfo personInfo = new PersonalInfo();
            personInfo.setFName("asd");
            personInfo.setLName("asd");
            personInfo.setMName("asd");
            personInfo.setSex(refSex);
            personInfo.setCstat(refCivilStatus);
            personInfo.setCit(citizenship);
            personInfo.setCitAcq(refCitAcq);
            personInfo.setDob(LocalDate.parse("2000-10-10"));
            personInfo.setPob("asd");
            personInfo.setHeight(1.1);
            personInfo.setWeight(1.1);
            personInfo.setBloodType("asd");
            personInfo.setGsisNo("asd");
            personInfo.setPagibigId("asd");
            personInfo.setPhilhealthId("asd");
            personInfo.setSssNo("asd");
            personInfo.setTin("asd");
            personInfo.setAgencyEmpno("asd");
            DBCreate.createPersonalInfo(personInfo);

            // PersonalInfo personInfo = new PersonalInfo();
            // personInfo.setFName(requestBody.optString("firstName"));
            // personInfo.setLName(requestBody.optString("lastName"));
            // personInfo.setMName(requestBody.optString("middleName"));
            // personInfo.setSex(refSex);
            // personInfo.setCstat(refCivilStatus);
            // personInfo.setCit(citizenship);
            // personInfo.setCitAcq(refCitAcq);
            // personInfo.setDob(requestBody.has("dateOfBirth") && !requestBody.optString("dateOfBirth").isEmpty() ? LocalDate.parse(requestBody.optString("dateOfBirth")) : null);
            // personInfo.setPob(requestBody.optString("placeOfBirth"));
            // personInfo.setHeight(Double.parseDouble(requestBody.optString("height")));
            // personInfo.setWeight(Double.parseDouble(requestBody.optString("weight")));
            // personInfo.setBloodType(requestBody.optString("bloodType"));
            // personInfo.setGsisNo(requestBody.optString("gsis"));
            // personInfo.setPagibigId(requestBody.optString("pagibig"));
            // personInfo.setPhilhealthId(requestBody.optString("philHealth"));
            // personInfo.setSssNo(requestBody.optString("sss"));
            // personInfo.setTin(requestBody.optString("tin"));
            // personInfo.setAgencyEmpno(requestBody.optString("agency"));
            // DBCreate.createPersonalInfo(personInfo);

            // ContactInfo contactInfo = new ContactInfo();
            // contactInfo.setResHouseNo(requestBody.optString("resHouseNo"));
            // contactInfo.setResHouseStreet(requestBody.optString("resHouseSt"));
            // contactInfo.setResVillage(requestBody.optString("resHouseVil"));
            // contactInfo.setResBgy(requestBody.optString("resBrgy"));
            // contactInfo.setResCitymun(requestBody.optString("resCity"));
            // contactInfo.setResProv(requestBody.optString("resProv"));
            // contactInfo.setResZipcode(requestBody.optString("resZipCode"));
            // contactInfo.setPermHouseNo(requestBody.optString("permHouseNo"));
            // contactInfo.setPermHouseStreet(requestBody.optString("permHouseSt"));
            // contactInfo.setPermVillage(requestBody.optString("permHouseVil"));
            // contactInfo.setPermBgy(requestBody.optString("permBrgy"));
            // contactInfo.setPermCitymun(requestBody.optString("permCity"));
            // contactInfo.setPermProv(requestBody.optString("permProv"));
            // contactInfo.setPermZipcode(requestBody.optString("permZipCode"));
            // contactInfo.setTelNo(requestBody.optString("telNo"));
            // contactInfo.setMobileNo(requestBody.optString("mobileNo"));
            // contactInfo.setEmailAddress(requestBody.optString("emailAd"));
            // contactInfo.setP(personInfo);
            // DBCreate.createContactInfo(contactInfo);
            //
            // FamilyBackground familyBackground = new FamilyBackground();
            // familyBackground.setSpouseLname(requestBody.optString("spouseLastName"));
            // familyBackground.setSpouseFname(requestBody.optString("spouseFirstName"));
            // familyBackground.setSpouseMname(requestBody.optString("spouseMiddleName"));
            // familyBackground.setSpouseOccupation(requestBody.optString("spouseOccupation"));
            // familyBackground.setSpouseEmployer(requestBody.optString("spouseEmployer"));
            // familyBackground.setSpouseEmpAddress(requestBody.optString("spouseEmployerAddress"));
            // familyBackground.setFatherLname(requestBody.optString("fatherLastName"));
            // familyBackground.setFatherFname(requestBody.optString("fatherFirstName"));
            // familyBackground.setFatherMname(requestBody.optString("fatherMiddleName"));
            // familyBackground.setMotherMnFname(requestBody.optString("motherFirstName"));
            // familyBackground.setMotherMnLname(requestBody.optString("motherLastName"));
            // familyBackground.setMotherMnFname(requestBody.optString("motherMiddleName"));
            // familyBackground.setP(personInfo);
            // DBCreate.createFamilyBackground(familyBackground);
            responseMap.put("status", "success");
        } catch (Exception e) {
            responseMap.put("status", "error");
            responseMap.put("message", e.getStackTrace().toString());
        }

        out.println(new JSONObject(responseMap));
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
        PrintWriter out = response.getWriter();
        response.setHeader("Access-Control-Allow-Origin", "*");
        response.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
        response.setHeader("Access-Control-Allow-Headers", "Content-Type");
        response.setContentType("application/json");

        Map<String, Object> map = new HashMap<>();

        // this is a lot of nesting but idc
        String personIdParameter = request.getParameter("person_id");
        if (personIdParameter == null) out.println((new JSONObject(map)));
        else {
            try {
                int personId = Integer.parseInt(personIdParameter);

                PersonalInfo personInfo = DBRead.getPersonalInfo(personId);
                if (personInfo == null) out.println((new JSONObject(map)));
                else {
                    List<FamilyChild> familyChilds = DBRead.getFamilyChildByPerson(personInfo);
                    ContactInfo contactInfo = DBRead.getContactInfoByPerson(personInfo).getFirst();
                    FamilyBackground familyBackground = DBRead.getFamilyBackgroundByPerson(personInfo).getFirst();

                    map.put("firstName", personInfo.getFName());
                    map.put("lastName", personInfo.getLName());
                    map.put("middleName", personInfo.getMName());
                    map.put("sex", personInfo.getSex().getId().toString());
                    map.put("civilStatus", personInfo.getCstat().getId().toString());
                    map.put("citizenship", personInfo.getCit().getId().toString());
                    map.put("citizenshipAcq", personInfo.getCitAcq().getId().toString());
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
                        child.put("childId", famChild.getId());
                        child.put("fullName", famChild.getChildFullname());
                        child.put("dateOfBirth", famChild.getChildDob());
                        children.add(child);
                    }
                    map.put("children", children);

                    JSONObject jsonObject = new JSONObject(map);
                    out.println(jsonObject);
                }
            } catch (NumberFormatException e) {
                out.println((new JSONObject(map)));
            }
        }
    }
}
