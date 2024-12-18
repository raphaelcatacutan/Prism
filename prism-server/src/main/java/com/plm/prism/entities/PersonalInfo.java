package com.plm.prism.entities;

import jakarta.persistence.*;

import java.time.LocalDate;

@Entity
@Table(name = "personal_info")
public class PersonalInfo {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "p_id", nullable = false)
    private Integer id;

    @Column(name = "l_name", nullable = false, length = 50)
    private String lName;

    @Column(name = "f_name", nullable = false, length = 50)
    private String fName;

    @Column(name = "m_name", length = 50)
    private String mName;

    @Column(name = "dob", nullable = false)
    private LocalDate dob;

    @Column(name = "pob", length = 50)
    private String pob;

    @Column(name = "height")
    private Double height;

    @Column(name = "weight")
    private Double weight;

    @Column(name = "blood_type", length = 5)
    private String bloodType;

    @Column(name = "gsis_no", length = 50)
    private String gsisNo;

    @Column(name = "pagibig_id", length = 50)
    private String pagibigId;

    @Column(name = "philhealth_id", length = 50)
    private String philhealthId;

    @Column(name = "sss_no", length = 50)
    private String sssNo;

    @Column(name = "tin", length = 50)
    private String tin;

    @Column(name = "agency_empno", length = 50)
    private String agencyEmpno;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getLName() {
        return lName;
    }

    public void setLName(String lName) {
        this.lName = lName;
    }

    public String getFName() {
        return fName;
    }

    public void setFName(String fName) {
        this.fName = fName;
    }

    public String getMName() {
        return mName;
    }

    public void setMName(String mName) {
        this.mName = mName;
    }

    public LocalDate getDob() {
        return dob;
    }

    public void setDob(LocalDate dob) {
        this.dob = dob;
    }

    public String getPob() {
        return pob;
    }

    public void setPob(String pob) {
        this.pob = pob;
    }

    public Double getHeight() {
        return height;
    }

    public void setHeight(Double height) {
        this.height = height;
    }

    public Double getWeight() {
        return weight;
    }

    public void setWeight(Double weight) {
        this.weight = weight;
    }

    public String getBloodType() {
        return bloodType;
    }

    public void setBloodType(String bloodType) {
        this.bloodType = bloodType;
    }

    public String getGsisNo() {
        return gsisNo;
    }

    public void setGsisNo(String gsisNo) {
        this.gsisNo = gsisNo;
    }

    public String getPagibigId() {
        return pagibigId;
    }

    public void setPagibigId(String pagibigId) {
        this.pagibigId = pagibigId;
    }

    public String getPhilhealthId() {
        return philhealthId;
    }

    public void setPhilhealthId(String philhealthId) {
        this.philhealthId = philhealthId;
    }

    public String getSssNo() {
        return sssNo;
    }

    public void setSssNo(String sssNo) {
        this.sssNo = sssNo;
    }

    public String getTin() {
        return tin;
    }

    public void setTin(String tin) {
        this.tin = tin;
    }

    public String getAgencyEmpno() {
        return agencyEmpno;
    }

    public void setAgencyEmpno(String agencyEmpno) {
        this.agencyEmpno = agencyEmpno;
    }

}