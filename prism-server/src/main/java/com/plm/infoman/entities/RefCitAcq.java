package com.plm.infoman.entities;

import jakarta.persistence.*;
import java.util.List;

@Entity
@Table(name = "ref_cit_acq")
public class RefCitAcq {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "cit_acq_id")
    private Long id;

    @Column(name = "cit_acq_desc")
    private String description;

    // Getters and setters omitted for brevity
}
