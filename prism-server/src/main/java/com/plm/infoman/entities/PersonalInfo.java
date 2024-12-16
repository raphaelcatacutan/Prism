package com.plm.infoman.entities;

import jakarta.persistence.*;
import java.util.List;

@Entity
@Table(name = "personal_info")
public class PersonalInfo {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "p_id")
    private Long id;

    @Column(name = "first_name")
    private String firstName;

    @Column(name = "last_name")
    private String lastName;

    @ManyToOne
    @JoinColumn(name = "sex_id")
    private RefSex sex;

    @ManyToOne
    @JoinColumn(name = "civilstatus_id")
    private RefCivilStatus civilStatus;

    @OneToMany(mappedBy = "personalInfo", cascade = CascadeType.ALL)
    private List<ContactInfo> contactInfo;

    @OneToMany(mappedBy = "personalInfo", cascade = CascadeType.ALL)
    private List<FamilyBackground> familyBackground;

    // Getters and setters omitted for brevity
}