package com.plm.prism.entities;

import jakarta.persistence.*;

@Entity
@Table(name = "family_background")
public class FamilyBackground {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "fam_bg_id", nullable = false)
    private Integer id;

    @Column(name = "spouse_lname", length = 50)
    private String spouseLname;

    @Column(name = "spouse_fname", length = 50)
    private String spouseFname;

    @Column(name = "spouse_mname", length = 50)
    private String spouseMname;

    @Column(name = "spouse_occupation", length = 50)
    private String spouseOccupation;

    @Column(name = "spouse_employer", length = 50)
    private String spouseEmployer;

    @Column(name = "spouse_emp_address", length = 50)
    private String spouseEmpAddress;

    @Column(name = "father_lname", length = 50)
    private String fatherLname;

    @Column(name = "father_fname", length = 50)
    private String fatherFname;

    @Column(name = "father_mname", length = 50)
    private String fatherMname;

    @Column(name = "mother_mn_lname", length = 50)
    private String motherMnLname;

    @Column(name = "mother_mn_fname", length = 50)
    private String motherMnFname;

    @Column(name = "mother_mn_mname", length = 50)
    private String motherMnMname;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getSpouseLname() {
        return spouseLname;
    }

    public void setSpouseLname(String spouseLname) {
        this.spouseLname = spouseLname;
    }

    public String getSpouseFname() {
        return spouseFname;
    }

    public void setSpouseFname(String spouseFname) {
        this.spouseFname = spouseFname;
    }

    public String getSpouseMname() {
        return spouseMname;
    }

    public void setSpouseMname(String spouseMname) {
        this.spouseMname = spouseMname;
    }

    public String getSpouseOccupation() {
        return spouseOccupation;
    }

    public void setSpouseOccupation(String spouseOccupation) {
        this.spouseOccupation = spouseOccupation;
    }

    public String getSpouseEmployer() {
        return spouseEmployer;
    }

    public void setSpouseEmployer(String spouseEmployer) {
        this.spouseEmployer = spouseEmployer;
    }

    public String getSpouseEmpAddress() {
        return spouseEmpAddress;
    }

    public void setSpouseEmpAddress(String spouseEmpAddress) {
        this.spouseEmpAddress = spouseEmpAddress;
    }

    public String getFatherLname() {
        return fatherLname;
    }

    public void setFatherLname(String fatherLname) {
        this.fatherLname = fatherLname;
    }

    public String getFatherFname() {
        return fatherFname;
    }

    public void setFatherFname(String fatherFname) {
        this.fatherFname = fatherFname;
    }

    public String getFatherMname() {
        return fatherMname;
    }

    public void setFatherMname(String fatherMname) {
        this.fatherMname = fatherMname;
    }

    public String getMotherMnLname() {
        return motherMnLname;
    }

    public void setMotherMnLname(String motherMnLname) {
        this.motherMnLname = motherMnLname;
    }

    public String getMotherMnFname() {
        return motherMnFname;
    }

    public void setMotherMnFname(String motherMnFname) {
        this.motherMnFname = motherMnFname;
    }

    public String getMotherMnMname() {
        return motherMnMname;
    }

    public void setMotherMnMname(String motherMnMname) {
        this.motherMnMname = motherMnMname;
    }

}