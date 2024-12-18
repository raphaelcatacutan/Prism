package com.plm.prism.entities;

import jakarta.persistence.*;

import java.time.LocalDate;

@Entity
@Table(name = "family_children")
public class FamilyChild {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "fam_ch_id", nullable = false)
    private Integer id;

    @Column(name = "child_fullname", length = 75)
    private String childFullname;

    @Column(name = "child_dob")
    private LocalDate childDob;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getChildFullname() {
        return childFullname;
    }

    public void setChildFullname(String childFullname) {
        this.childFullname = childFullname;
    }

    public LocalDate getChildDob() {
        return childDob;
    }

    public void setChildDob(LocalDate childDob) {
        this.childDob = childDob;
    }

}