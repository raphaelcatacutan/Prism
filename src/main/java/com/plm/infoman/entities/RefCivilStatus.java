package com.plm.infoman.entities;

import jakarta.persistence.*;
import java.util.List;

@Entity
@Table(name = "ref_civilstatus")
public class RefCivilStatus {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "civilstatus_id")
    private Long id;

    @Column(name = "civilstatus_desc")
    private String description;

    // Getters and setters omitted for brevity
}