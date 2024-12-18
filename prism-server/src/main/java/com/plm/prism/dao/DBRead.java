package com.plm.prism.dao;

import com.plm.prism.entities.*;
import com.plm.prism.utils.HibernateUtil;
import org.hibernate.Session;

import java.util.List;

public class DBRead {
    public List<ContactInfo> readContactInfo() {
        try (Session session = HibernateUtil.getSessionFactory().openSession()) {
            return session.createQuery("FROM ContactInfo", ContactInfo.class).list();
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

    public List<FamilyBackground> readFamilyBackground() {
        try (Session session = HibernateUtil.getSessionFactory().openSession()) {
            return session.createQuery("FROM FamilyBackground", FamilyBackground.class).list();
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

    public List<FamilyChild> readFamilyChildren() {
        try (Session session = HibernateUtil.getSessionFactory().openSession()) {
            return session.createQuery("FROM FamilyChild", FamilyChild.class).list();
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

    public List<PersonalInfo> readPersonalInfo() {
        try (Session session = HibernateUtil.getSessionFactory().openSession()) {
            return session.createQuery("FROM PersonalInfo", PersonalInfo.class).list();
        } catch (Exception e) {
            throw new RuntimeException(e);
        }

    }

    public List<EducBackground> readEducBackground() {
        try (Session session = HibernateUtil.getSessionFactory().openSession()) {
            return session.createQuery("FROM EducBackground ", EducBackground.class).list();
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

    public ContactInfo getContactInfo(int contactId) {
        try (Session session = HibernateUtil.getSessionFactory().openSession()) {
            return session.get(ContactInfo.class, contactId);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

    public FamilyBackground getFamilyBackground(int familyBgId) {
        try (Session session = HibernateUtil.getSessionFactory().openSession()) {
            return session.get(FamilyBackground.class, familyBgId);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

    public FamilyChild getFamilyChildren(int childId) {
        try (Session session = HibernateUtil.getSessionFactory().openSession()) {
            return session.get(FamilyChild.class, childId);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

    public PersonalInfo getPersonalInfo(int personalId) {
        try (Session session = HibernateUtil.getSessionFactory().openSession()) {
            return session.get(PersonalInfo.class, personalId);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

    public EducBackground getEducBackground(int educId) {
        try (Session session = HibernateUtil.getSessionFactory().openSession()) {
            return session.get(EducBackground.class, educId);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

    public ContactInfo getAllContactInfo(int contactInfo) {
        try (Session session = HibernateUtil.getSessionFactory().openSession()) {
            return session.get(ContactInfo.class, contactInfo);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

    public List<RefSex> readRefSex() {
        try (Session session = HibernateUtil.getSessionFactory().openSession()) {
            return session.createQuery("FROM RefSex", RefSex.class).list();
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

    public RefSex getRefSex(int sexId) {
        try (Session session = HibernateUtil.getSessionFactory().openSession()) {
            return session.get(RefSex.class, sexId);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

    public List<RefCitizenship> readRefCitizenship() {
        try (Session session = HibernateUtil.getSessionFactory().openSession()) {
            return session.createQuery("FROM RefCitizenship", RefCitizenship.class).list();
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

    public RefCitizenship getRefCitizenship(int citId) {
        try (Session session = HibernateUtil.getSessionFactory().openSession()) {
            return session.get(RefCitizenship.class, citId);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

    public List<RefCivilstatus> readRefCivilstatus() {
        try (Session session = HibernateUtil.getSessionFactory().openSession()) {
            return session.createQuery("FROM RefCivilstatus", RefCivilstatus.class).list();
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

    public RefCivilstatus getRefCivilstatus(int cstatId) {
        try (Session session = HibernateUtil.getSessionFactory().openSession()) {
            return session.get(RefCivilstatus.class, cstatId);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

    public List<RefCitAcq> readRefCitAcq() {
        try (Session session = HibernateUtil.getSessionFactory().openSession()) {
            return session.createQuery("FROM RefCitAcq", RefCitAcq.class).list();
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

    public RefCitAcq getRefCitAcq(int citAcqId) {
        try (Session session = HibernateUtil.getSessionFactory().openSession()) {
            return session.get(RefCitAcq.class, citAcqId);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

    public List<RefEducLevel> readRefEducLevel() {
        try (Session session = HibernateUtil.getSessionFactory().openSession()) {
            return session.createQuery("FROM RefEducLevel", RefEducLevel.class).list();
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

    public RefEducLevel getRefEducLevel(int educLevelId) {
        try (Session session = HibernateUtil.getSessionFactory().openSession()) {
            return session.get(RefEducLevel.class, educLevelId);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }
}
