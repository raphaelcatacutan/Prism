package com.plm.infoman.entities;

import jakarta.persistence.*;

@Entity
@Table(name = "family_children")
public class FamilyChildren {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "fc_id")
    private Long id;

    @Column(name = "child_name")
    private String childName;

    @ManyToOne
    @JoinColumn(name = "f_id", nullable = false)
    private FamilyBackground familyBackground;

    // Getters and setters omitted for brevity
}
