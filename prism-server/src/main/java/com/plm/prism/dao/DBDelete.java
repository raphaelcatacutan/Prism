/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.plm.prism.dao;

import com.plm.prism.entities.*;
import com.plm.prism.utils.HibernateUtil;
import org.hibernate.Session;
import org.hibernate.Transaction;

/**
 *
 * @author Robante
 */
public class DBDelete {
    public static void deleteContactInfo(int contactId) {
        Transaction transaction = null;
        try (Session session = HibernateUtil.getSessionFactory().openSession()) {
            transaction = session.beginTransaction();

            ContactInfo contactInfo = session.get(ContactInfo.class, contactId);
            if (contactInfo != null) {
                session.delete(contactInfo);
                transaction.commit();
            } else {
                System.out.println("ContactInfo with ID " + contactId + " not found.");
            }
        } catch (Exception e) {
            if (transaction != null) transaction.rollback();
            e.printStackTrace();
        }
    }

    public static void deleteFamilyBackground(int familyBgId) {

        Transaction transaction = null;
        try (Session session = HibernateUtil.getSessionFactory().openSession()) {
            transaction = session.beginTransaction();

            FamilyBackground familyBackground = session.get(FamilyBackground.class, familyBgId);
            if (familyBackground != null) {
                session.delete(familyBackground);
                transaction.commit();
            } else {
                System.out.println("FamilyBackground with ID " + familyBgId + " not found.");
            }
        } catch (Exception e) {
            if (transaction != null) transaction.rollback();
            e.printStackTrace();
        }
    }

    public static void deleteFamilyChildren(int childId) {
        Transaction transaction = null;
        try (Session session = HibernateUtil.getSessionFactory().openSession()) {
            transaction = session.beginTransaction();

            FamilyChild familyChildren = session.get(FamilyChild.class, childId);
            if (familyChildren != null) {
                session.delete(familyChildren);
                transaction.commit();
            } else {
                System.out.println("FamilyChildren with ID " + childId + " not found.");
            }
        } catch (Exception e) {
            if (transaction != null) transaction.rollback();
            e.printStackTrace();
        }
    }

    public static void deletePersonalInfo(int personalId) {
        Transaction transaction = null;
        try (Session session = HibernateUtil.getSessionFactory().openSession()) {
            transaction = session.beginTransaction();

            PersonalInfo personalInfo = session.get(PersonalInfo.class, personalId);
            if (personalInfo != null) {
                session.delete(personalInfo);
                transaction.commit();
            } else {
                System.out.println("PersonalInfo with ID " + personalId + " not found.");
            }
        } catch (Exception e) {
            if (transaction != null) transaction.rollback();
            e.printStackTrace();
        }
    }

    public static void deleteEducBackground(int personalId) {
        Transaction transaction = null;
        try (Session session = HibernateUtil.getSessionFactory().openSession()) {
            transaction = session.beginTransaction();

            PersonalInfo personalInfo = session.get(PersonalInfo.class, personalId);
            if (personalInfo != null) {
                session.delete(personalInfo);
                transaction.commit();
            } else {
                System.out.println("PersonalInfo with ID " + personalId + " not found.");
            }
        } catch (Exception e) {
            if (transaction != null) transaction.rollback();
            e.printStackTrace();
        }
    }

}
