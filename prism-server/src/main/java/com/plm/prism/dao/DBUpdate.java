package com.plm.prism.dao;

import com.plm.prism.entities.*;
import com.plm.prism.utils.HibernateUtil;
import org.hibernate.Session;
import org.hibernate.Transaction;

public class DBUpdate {
    public static void updateContactInfo(ContactInfo contactInfo) throws Exception {
        Transaction transaction = null;
        try (Session session = HibernateUtil.getSessionFactory().openSession()) {
            transaction = session.beginTransaction();
            session.update(contactInfo);
            transaction.commit();
        } catch (Exception e) {
            if (transaction != null) {
                transaction.rollback();
            }
            throw new Exception("Failed to update ContactInfo: " + e.getMessage(), e);
        }
    }

    public static void updateEducBackground(EducBackground eduBkgrd) throws Exception {
        Transaction transaction = null;
        try (Session session = HibernateUtil.getSessionFactory().openSession()) {
            transaction = session.beginTransaction();
            session.update(eduBkgrd);
            transaction.commit();
        } catch (Exception e) {
            if (transaction != null) {
                transaction.rollback();
            }
            throw new Exception("Failed to update Educational Background: " + e.getMessage(), e);
        }
    }

    public static void updateFamilyBackground(FamilyBackground famBkgrd) throws Exception {
        Transaction transaction = null;
        try (Session session = HibernateUtil.getSessionFactory().openSession()) {
            transaction = session.beginTransaction();
            session.update(famBkgrd);
            transaction.commit();
        } catch (Exception e) {
            if (transaction != null) {
                transaction.rollback();
            }
            throw new Exception("Failed to update Family Background: " + e.getMessage(), e);
        }
    }

    public static void updatePersonalInfo(PersonalInfo personalInfo) throws Exception {
        Transaction transaction = null;
        try (Session session = HibernateUtil.getSessionFactory().openSession()) {
            transaction = session.beginTransaction();
            session.update(personalInfo);
            transaction.commit();
        } catch (Exception e) {
            if (transaction != null) {
                transaction.rollback();
            }
            throw new Exception("Failed to update PersonalInfo: " + e.getMessage(), e);
        }
    }

    public static void updateFamilyChild(FamilyChild familyChild) throws Exception {
        Transaction transaction = null;
        try (Session session = HibernateUtil.getSessionFactory().openSession()) {
            transaction = session.beginTransaction();
            session.update(familyChild);
            transaction.commit();
        } catch (Exception e) {
            if (transaction != null) {
                transaction.rollback();
            }
            throw new Exception("Failed to update FamilyChild: " + e.getMessage(), e);
        }
    }

}
