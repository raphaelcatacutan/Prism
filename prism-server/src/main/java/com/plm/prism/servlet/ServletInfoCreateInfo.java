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
import java.time.OffsetDateTime;
import java.util.HashMap;
import java.util.Map;

@WebServlet("/info_create_info")
public class ServletInfoCreateInfo extends HttpServlet {
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

        Map<String, Object> map = new HashMap<>();
        JSONObject jsonObject = DBUtil.parseBody(request.getInputStream());

        RefSex refSex = DBRead.getRefSex(Integer.parseInt(jsonObject.getString("sex")));
        RefCivilstatus refCivilStatus = DBRead.getRefCivilstatus(Integer.parseInt(jsonObject.getString("civilStatus")));
        RefCitizenship refCitizenship = DBRead.getRefCitizenship(Integer.parseInt(jsonObject.getString("citizenship")));
        RefCitAcq refCitizenshipAcq = DBRead.getRefCitAcq(Integer.parseInt(jsonObject.getString("citizenshipAcq")));

        PersonalInfo personalInfo = new PersonalInfo();
        personalInfo.setFName(jsonObject.getString("firstName"));
        personalInfo.setLName(jsonObject.getString("lastName"));
        personalInfo.setMName(jsonObject.getString("middleName"));
        personalInfo.setSex(refSex);
        personalInfo.setCstat(refCivilStatus);
        personalInfo.setCit(refCitizenship);
        personalInfo.setCitAcq(refCitizenshipAcq);
        personalInfo.setDob(OffsetDateTime.parse(jsonObject.getString("dateOfBirth")).toLocalDate());
        personalInfo.setPob(jsonObject.getString("placeOfBirth"));
        String heightString = jsonObject.getString("height");
        String weightString = jsonObject.getString("weight");
        personalInfo.setHeight(heightString != null && !heightString.trim().isEmpty() ? Double.parseDouble(heightString) : 0.0);
        personalInfo.setWeight(weightString != null && !weightString.trim().isEmpty() ? Double.parseDouble(weightString) : 0.0);
        personalInfo.setBloodType(jsonObject.getString("bloodType"));
        personalInfo.setGsisNo(jsonObject.getString("gsis"));
        personalInfo.setPagibigId(jsonObject.getString("pagibig"));
        personalInfo.setPhilhealthId(jsonObject.getString("philHealth"));
        personalInfo.setSssNo(jsonObject.getString("sss"));
        personalInfo.setTin(jsonObject.getString("tin"));
        personalInfo.setAgencyEmpno(jsonObject.getString("agency"));
        DBCreate.createPersonalInfo(personalInfo);

        ContactInfo contactInfo = new ContactInfo();
        contactInfo.setResHouseNo(jsonObject.getString("resHouseNo"));
        contactInfo.setResHouseStreet(jsonObject.getString("resHouseSt"));
        contactInfo.setResVillage(jsonObject.getString("resHouseVil"));
        contactInfo.setResBgy(jsonObject.getString("resBrgy"));
        contactInfo.setResCitymun(jsonObject.getString("resCity"));
        contactInfo.setResProv(jsonObject.getString("resProv"));
        contactInfo.setResZipcode(jsonObject.getString("resZipCode"));
        contactInfo.setPermHouseNo(jsonObject.getString("permHouseNo"));
        contactInfo.setPermHouseStreet(jsonObject.getString("permHouseSt"));
        contactInfo.setPermVillage(jsonObject.getString("permHouseVil"));
        contactInfo.setPermBgy(jsonObject.getString("permBrgy"));
        contactInfo.setPermCitymun(jsonObject.getString("permCity"));
        contactInfo.setPermProv(jsonObject.getString("permProv"));
        contactInfo.setPermZipcode(jsonObject.getString("permZipCode"));
        contactInfo.setTelNo(jsonObject.getString("telNo"));
        contactInfo.setMobileNo(jsonObject.getString("mobileNo"));
        contactInfo.setEmailAddress(jsonObject.getString("emailAd"));
        contactInfo.setP(personalInfo);
        DBCreate.createContactInfo(contactInfo);

        FamilyBackground familyBackground = new FamilyBackground();
        familyBackground.setSpouseLname(jsonObject.getString("spouseLastName"));
        familyBackground.setSpouseFname(jsonObject.getString("spouseFirstName"));
        familyBackground.setSpouseMname(jsonObject.getString("spouseMiddleName"));
        familyBackground.setSpouseOccupation(jsonObject.getString("spouseOccupation"));
        familyBackground.setSpouseEmployer(jsonObject.getString("spouseEmployer"));
        familyBackground.setSpouseEmpAddress(jsonObject.getString("spouseEmployerAddress"));
        familyBackground.setFatherLname(jsonObject.getString("fatherLastName"));
        familyBackground.setFatherFname(jsonObject.getString("fatherFirstName"));
        familyBackground.setFatherMname(jsonObject.getString("fatherMiddleName"));
        familyBackground.setMotherMnFname(jsonObject.getString("motherFirstName"));
        familyBackground.setMotherMnLname(jsonObject.getString("motherLastName"));
        familyBackground.setMotherMnFname(jsonObject.getString("motherMiddleName"));
        familyBackground.setP(personalInfo);
        DBCreate.createFamilyBackground(familyBackground);

        Map<String, Object> responseMap = new HashMap<>();

        response.getWriter().println(new JSONObject(responseMap));
    }
}
