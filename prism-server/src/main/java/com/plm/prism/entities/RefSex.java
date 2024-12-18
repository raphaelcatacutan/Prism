package com.plm.prism.entities;

import jakarta.persistence.*;

@Entity
@Table(name = "ref_sex")
public class RefSex {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "sex_id", nullable = false)
    private Integer id;

    @Column(name = "sex_desc", nullable = false, length = 6)
    private String sexDesc;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getSexDesc() {
        return sexDesc;
    }

    public void setSexDesc(String sexDesc) {
        this.sexDesc = sexDesc;
    }

}