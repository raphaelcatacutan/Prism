package com.plm.infoman.entities;

import jakarta.persistence.*;

@Entity
@Table(name = "contact_info")
public class ContactInfo {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "c_id")
    private Long id;

    @Column(name = "email_address", unique = true)
    private String emailAddress;

    @Column(name = "mobile_no")
    private String mobileNo;

    @Column(name = "telephone_no")
    private String telephoneNo;

    @ManyToOne
    @JoinColumn(name = "p_id", nullable = false)
    private PersonalInfo personalInfo;

    // Getters and setters omitted for brevity
}