package com.plm.prism.entities;

import jakarta.persistence.*;

@Entity
@Table(name = "ref_cit_acq")
public class RefCitAcq {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "cit_acq_id", nullable = false)
    private Integer id;

    @Column(name = "cit_acq_desc", nullable = false, length = 50)
    private String citAcqDesc;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getCitAcqDesc() {
        return citAcqDesc;
    }

    public void setCitAcqDesc(String citAcqDesc) {
        this.citAcqDesc = citAcqDesc;
    }

}