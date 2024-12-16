package com.plm.infoman.entities;

import jakarta.persistence.*;
import java.util.List;

@Entity
@Table(name = "family_background")
public class FamilyBackground {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "f_id")
    private Long id;

    @Column(name = "father_name")
    private String fatherName;

    @Column(name = "mother_name")
    private String motherName;

    @ManyToOne
    @JoinColumn(name = "p_id", nullable = false)
    private PersonalInfo personalInfo;

    @OneToMany(mappedBy = "familyBackground", cascade = CascadeType.ALL)
    private List<FamilyChildren> children;

    // Getters and setters omitted for brevity
}