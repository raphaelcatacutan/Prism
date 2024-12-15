package com.plm.infoman.entities;

import jakarta.persistence.*;
import java.util.List;

@Entity
@Table(name = "ref_citizenship")
public class RefCitizenship {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "citizenship_id")
    private Long id;

    @Column(name = "citizenship_desc")
    private String description;

    // Getters and setters omitted for brevity
}