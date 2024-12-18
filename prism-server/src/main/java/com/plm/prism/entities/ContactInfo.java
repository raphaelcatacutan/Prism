package com.plm.prism.entities;

import jakarta.persistence.*;

@Entity
@Table(name = "contact_info")
@NamedQuery(
        name = "contactInfo.findByPID",
        query = "FROM ContactInfo ci WHERE ci.p = :p"
)
public class ContactInfo {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "contact_id", nullable = false)
    private Integer id;

    @Column(name = "res_house_no", length = 50)
    private String resHouseNo;

    @Column(name = "res_house_street", length = 50)
    private String resHouseStreet;

    @Column(name = "res_village", length = 50)
    private String resVillage;

    @Column(name = "res_bgy", length = 50)
    private String resBgy;

    @Column(name = "res_citymun", length = 50)
    private String resCitymun;

    @Column(name = "res_prov", length = 50)
    private String resProv;

    @Column(name = "res_zipcode", length = 10)
    private String resZipcode;

    @Column(name = "perm_house_no", length = 50)
    private String permHouseNo;

    @Column(name = "perm_house_street", length = 50)
    private String permHouseStreet;

    @Column(name = "perm_village", length = 50)
    private String permVillage;

    @Column(name = "perm_bgy", length = 50)
    private String permBgy;

    @Column(name = "perm_citymun", length = 50)
    private String permCitymun;

    @Column(name = "perm_prov", length = 50)
    private String permProv;

    @Column(name = "perm_zipcode", length = 10)
    private String permZipcode;

    @Column(name = "tel_no", length = 20)
    private String telNo;

    @Column(name = "mobile_no", length = 20)
    private String mobileNo;

    @Column(name = "email_address", length = 50)
    private String emailAddress;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "p_id", nullable = false)
    private PersonalInfo p;

    public PersonalInfo getP() {
        return p;
    }

    public void setP(PersonalInfo p) {
        this.p = p;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getResHouseNo() {
        return resHouseNo;
    }

    public void setResHouseNo(String resHouseNo) {
        this.resHouseNo = resHouseNo;
    }

    public String getResHouseStreet() {
        return resHouseStreet;
    }

    public void setResHouseStreet(String resHouseStreet) {
        this.resHouseStreet = resHouseStreet;
    }

    public String getResVillage() {
        return resVillage;
    }

    public void setResVillage(String resVillage) {
        this.resVillage = resVillage;
    }

    public String getResBgy() {
        return resBgy;
    }

    public void setResBgy(String resBgy) {
        this.resBgy = resBgy;
    }

    public String getResCitymun() {
        return resCitymun;
    }

    public void setResCitymun(String resCitymun) {
        this.resCitymun = resCitymun;
    }

    public String getResProv() {
        return resProv;
    }

    public void setResProv(String resProv) {
        this.resProv = resProv;
    }

    public String getResZipcode() {
        return resZipcode;
    }

    public void setResZipcode(String resZipcode) {
        this.resZipcode = resZipcode;
    }

    public String getPermHouseNo() {
        return permHouseNo;
    }

    public void setPermHouseNo(String permHouseNo) {
        this.permHouseNo = permHouseNo;
    }

    public String getPermHouseStreet() {
        return permHouseStreet;
    }

    public void setPermHouseStreet(String permHouseStreet) {
        this.permHouseStreet = permHouseStreet;
    }

    public String getPermVillage() {
        return permVillage;
    }

    public void setPermVillage(String permVillage) {
        this.permVillage = permVillage;
    }

    public String getPermBgy() {
        return permBgy;
    }

    public void setPermBgy(String permBgy) {
        this.permBgy = permBgy;
    }

    public String getPermCitymun() {
        return permCitymun;
    }

    public void setPermCitymun(String permCitymun) {
        this.permCitymun = permCitymun;
    }

    public String getPermProv() {
        return permProv;
    }

    public void setPermProv(String permProv) {
        this.permProv = permProv;
    }

    public String getPermZipcode() {
        return permZipcode;
    }

    public void setPermZipcode(String permZipcode) {
        this.permZipcode = permZipcode;
    }

    public String getTelNo() {
        return telNo;
    }

    public void setTelNo(String telNo) {
        this.telNo = telNo;
    }

    public String getMobileNo() {
        return mobileNo;
    }

    public void setMobileNo(String mobileNo) {
        this.mobileNo = mobileNo;
    }

    public String getEmailAddress() {
        return emailAddress;
    }

    public void setEmailAddress(String emailAddress) {
        this.emailAddress = emailAddress;
    }

}