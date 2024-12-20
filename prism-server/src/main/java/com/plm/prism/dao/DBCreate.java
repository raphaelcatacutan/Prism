package com.plm.prism.dao;

import com.plm.prism.entities.*;
import com.plm.prism.utils.HibernateUtil;
import org.hibernate.Session;
import org.hibernate.Transaction;

/**
 * DBCreate
 * Handles creation of records in database tables
 * 
 * @author Robante
 */
public class DBCreate {
    public static void createContactInfo(ContactInfo contactInfo) {
        Transaction transaction = null;
        try (Session session = HibernateUtil.getSessionFactory().openSession()) {
            transaction = session.beginTransaction();
            session.save(contactInfo);
            transaction.commit();
        } catch (Exception e) {
            if (transaction != null) transaction.rollback();
            e.printStackTrace();
        }
    }

    public static void createFamilyBackground(FamilyBackground familyBackground) {
        Transaction transaction = null;
        try (Session session = HibernateUtil.getSessionFactory().openSession()) {
            transaction = session.beginTransaction();
            session.save(familyBackground);
            transaction.commit();
        } catch (Exception e) {
            if (transaction != null) transaction.rollback();
            e.printStackTrace();
        }
    }

    public static void createFamilyChildren(FamilyChild familyChildren) {
        Transaction transaction = null;
        try (Session session = HibernateUtil.getSessionFactory().openSession()) {
            transaction = session.beginTransaction();
            session.save(familyChildren);
            transaction.commit();
        } catch (Exception e) {
            if (transaction != null) transaction.rollback();
            e.printStackTrace();
        }
    }

    public static Integer createPersonalInfo(PersonalInfo personalInfo) {
        Transaction transaction = null;
        Integer personId = null; // To store the generated ID
        try (Session session = HibernateUtil.getSessionFactory().openSession()) {
            transaction = session.beginTransaction();
            personId = (Integer) session.save(personalInfo); // Save and get the ID
            transaction.commit();
        } catch (Exception e) {
            if (transaction != null) transaction.rollback();
            e.printStackTrace();
        }
        return personId; // Return the generated ID
    }


    public static void createEducBackground(EducBackground educBackground) {
        Session session = HibernateUtil.getSessionFactory().openSession();
        Transaction transaction = null;

        try {
            transaction = session.beginTransaction();
            session.save(educBackground);
            transaction.commit();
        } catch (Exception e) {
            if (transaction != null) transaction.rollback();
            e.printStackTrace();
        } finally {
            session.close();
        }
    }
}
