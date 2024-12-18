package com.plm.prism.entities;

import jakarta.persistence.*;

@Entity
@Table(name = "ref_citizenship")
public class RefCitizenship {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "cit_id", nullable = false)
    private Integer id;

    @Column(name = "cit_desc", nullable = false, length = 50)
    private String citDesc;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getCitDesc() {
        return citDesc;
    }

    public void setCitDesc(String citDesc) {
        this.citDesc = citDesc;
    }

}