package com.plm.prism.entities;

import jakarta.persistence.*;

@Entity
@Table(name = "ref_educ_level")
public class RefEducLevel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "educ_level_id", nullable = false)
    private Integer id;

    @Column(name = "educ_level_desc", nullable = false, length = 50)
    private String educLevelDesc;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getEducLevelDesc() {
        return educLevelDesc;
    }

    public void setEducLevelDesc(String educLevelDesc) {
        this.educLevelDesc = educLevelDesc;
    }

}