package com.plm.infoman.entities;

import jakarta.persistence.*;
import java.util.List;

@Entity
@Table(name = "ref_sex")
public class RefSex {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "sex_id")
    private Long id;

    @Column(name = "sex_desc")
    private String description;

    // Getters and setters omitted for brevity
}
