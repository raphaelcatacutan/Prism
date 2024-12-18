package com.plm.prism.entities;

import jakarta.persistence.*;

import java.time.LocalDate;

@Entity
@Table(name = "educ_background")
@NamedQuery(
        name = "educBackground.findByPID",
        query = "FROM EducBackground ci WHERE ci.p = :p"
)
public class EducBackground {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "educ_id", nullable = false)
    private Integer id;

    @Column(name = "school", length = 100)
    private String school;

    @Column(name = "degree", length = 50)
    private String degree;

    @Column(name = "edate_from")
    private LocalDate edateFrom;

    @Column(name = "edate_to")
    private LocalDate edateTo;

    @Column(name = "units_earned")
    private Integer unitsEarned;

    @Column(name = "year_grad")
    private Integer yearGrad;

    @Column(name = "honors", length = 50)
    private String honors;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "p_id", nullable = false)
    private PersonalInfo p;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "educ_level_id", nullable = false)
    private RefEducLevel educLevel;

    public RefEducLevel getEducLevel() {
        return educLevel;
    }

    public void setEducLevel(RefEducLevel educLevel) {
        this.educLevel = educLevel;
    }

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

    public String getSchool() {
        return school;
    }

    public void setSchool(String school) {
        this.school = school;
    }

    public String getDegree() {
        return degree;
    }

    public void setDegree(String degree) {
        this.degree = degree;
    }

    public LocalDate getEdateFrom() {
        return edateFrom;
    }

    public void setEdateFrom(LocalDate edateFrom) {
        this.edateFrom = edateFrom;
    }

    public LocalDate getEdateTo() {
        return edateTo;
    }

    public void setEdateTo(LocalDate edateTo) {
        this.edateTo = edateTo;
    }

    public Integer getUnitsEarned() {
        return unitsEarned;
    }

    public void setUnitsEarned(Integer unitsEarned) {
        this.unitsEarned = unitsEarned;
    }

    public Integer getYearGrad() {
        return yearGrad;
    }

    public void setYearGrad(Integer yearGrad) {
        this.yearGrad = yearGrad;
    }

    public String getHonors() {
        return honors;
    }

    public void setHonors(String honors) {
        this.honors = honors;
    }

}