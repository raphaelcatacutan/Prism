package com.plm.prism.entities;

import jakarta.persistence.*;

@Entity
@Table(name = "ref_civilstatus")
public class RefCivilstatus {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "cstat_id", nullable = false)
    private Integer id;

    @Column(name = "cstat_desc", nullable = false, length = 50)
    private String cstatDesc;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getCstatDesc() {
        return cstatDesc;
    }

    public void setCstatDesc(String cstatDesc) {
        this.cstatDesc = cstatDesc;
    }

}