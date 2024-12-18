package com.plm.prism.dao;

import com.plm.prism.entities.*;
import com.plm.prism.utils.HibernateUtil;
import org.hibernate.Session;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class DBRead {
    public static List<ContactInfo> getAllContactInfo() {
        try (Session session = HibernateUtil.getSessionFactory().openSession()) {
            return session.createQuery("FROM ContactInfo", ContactInfo.class).list();
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

    public static List<FamilyBackground> getAllFamilyBackground() {
        try (Session session = HibernateUtil.getSessionFactory().openSession()) {
            return session.createQuery("FROM FamilyBackground", FamilyBackground.class).list();
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

    public static List<FamilyChild> getAllFamilyChildren() {
        try (Session session = HibernateUtil.getSessionFactory().openSession()) {
            return session.createQuery("FROM FamilyChild", FamilyChild.class).list();
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

    public static List<PersonalInfo> getAllPersonalInfo() {
        try (Session session = HibernateUtil.getSessionFactory().openSession()) {
            return session.createQuery("FROM PersonalInfo", PersonalInfo.class).list();
        } catch (Exception e) {
            throw new RuntimeException(e);
        }

    }

    public static List<EducBackground> getAllEducBackground() {
        try (Session session = HibernateUtil.getSessionFactory().openSession()) {
            return session.createQuery("FROM EducBackground ", EducBackground.class).list();
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

    public static ContactInfo getContactInfo(int contactId) {
        try (Session session = HibernateUtil.getSessionFactory().openSession()) {
            return session.get(ContactInfo.class, contactId);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

    public static FamilyBackground getFamilyBackground(int familyBgId) {
        try (Session session = HibernateUtil.getSessionFactory().openSession()) {
            return session.get(FamilyBackground.class, familyBgId);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

    public static FamilyChild getFamilyChildren(int childId) {
        try (Session session = HibernateUtil.getSessionFactory().openSession()) {
            return session.get(FamilyChild.class, childId);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

    public static PersonalInfo getPersonalInfo(int personalId) {
        try (Session session = HibernateUtil.getSessionFactory().openSession()) {
            return session.get(PersonalInfo.class, personalId);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

    public static EducBackground getEducBackground(int educId) {
        try (Session session = HibernateUtil.getSessionFactory().openSession()) {
            return session.get(EducBackground.class, educId);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

    public static ContactInfo getAllContactInfo(int contactInfo) {
        try (Session session = HibernateUtil.getSessionFactory().openSession()) {
            return session.get(ContactInfo.class, contactInfo);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

    public static List<RefSex> getAllRefSex() {
        try (Session session = HibernateUtil.getSessionFactory().openSession()) {
            return session.createQuery("FROM RefSex", RefSex.class).list();
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

    public static RefSex getRefSex(int sexId) {
        try (Session session = HibernateUtil.getSessionFactory().openSession()) {
            return session.get(RefSex.class, sexId);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

    public static List<RefCitizenship> getAllRefCitizenship() {
        try (Session session = HibernateUtil.getSessionFactory().openSession()) {
            return session.createQuery("FROM RefCitizenship", RefCitizenship.class).list();
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

    public static RefCitizenship getRefCitizenship(int citId) {
        try (Session session = HibernateUtil.getSessionFactory().openSession()) {
            return session.get(RefCitizenship.class, citId);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

    public static List<RefCivilstatus> getAllRefCivilstatus() {
        try (Session session = HibernateUtil.getSessionFactory().openSession()) {
            return session.createQuery("FROM RefCivilstatus", RefCivilstatus.class).list();
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

    public static RefCivilstatus getRefCivilstatus(int cstatId) {
        try (Session session = HibernateUtil.getSessionFactory().openSession()) {
            return session.get(RefCivilstatus.class, cstatId);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

    public static List<RefCitAcq> getAllRefCitAcq() {
        try (Session session = HibernateUtil.getSessionFactory().openSession()) {
            return session.createQuery("FROM RefCitAcq", RefCitAcq.class).list();
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

    public static RefCitAcq getRefCitAcq(int citAcqId) {
        try (Session session = HibernateUtil.getSessionFactory().openSession()) {
            return session.get(RefCitAcq.class, citAcqId);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

    public static List<RefEducLevel> getAllRefEducLevel() {
        try (Session session = HibernateUtil.getSessionFactory().openSession()) {
            return session.createQuery("FROM RefEducLevel", RefEducLevel.class).list();
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

    public static RefEducLevel getRefEducLevel(int educLevelId) {
        try (Session session = HibernateUtil.getSessionFactory().openSession()) {
            return session.get(RefEducLevel.class, educLevelId);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

    public static Map<Integer, String> getRefCitizenshipDesc() {
        List<RefCitizenship> citizenships = DBRead.getAllRefCitizenship();

        Map<Integer, String> citizenshipDesc = new HashMap<>();
        for (RefCitizenship citizenship: citizenships) {
            citizenshipDesc.put(citizenship.getId(), citizenship.getCitDesc());
        }
        return citizenshipDesc;
    }

    public static Map<Integer, String> getRefCitAcqDesc() {
        List<RefCitAcq> citAcqs = DBRead.getAllRefCitAcq();

        Map<Integer, String> sexDesc = new HashMap<>();
        for (RefCitAcq citAcq: citAcqs) {
            sexDesc.put(citAcq.getId(), citAcq.getCitAcqDesc());
        }
        return sexDesc;
    }

    public static Map<Integer, String> getCivilstatusDesc() {
        List<RefCivilstatus> civilStatuses = DBRead.getAllRefCivilstatus();

        Map<Integer, String> civilStatDesc = new HashMap<>();
        for (RefCivilstatus civilStat: civilStatuses) {
            civilStatDesc.put(civilStat.getId(), civilStat.getCstatDesc());
        }
        return civilStatDesc;
    }

    public static Map<Integer, String> getEducLevelDesc() {
        List<RefEducLevel> educLevels = DBRead.getAllRefEducLevel();

        Map<Integer, String> educLevelDesc = new HashMap<>();
        for (RefEducLevel eduLevel: educLevels) {
            educLevelDesc.put(eduLevel.getId(), eduLevel.getEducLevelDesc());
        }
        return educLevelDesc;
    }

    public static Map<Integer, String> getSexDesc() {
        List<RefSex> sexes = DBRead.getAllRefSex();

        Map<Integer, String> sexDesc = new HashMap<>();
        for (RefSex sex: sexes) {
            sexDesc.put(sex.getId(), sex.getSexDesc());
        }
        return sexDesc;
    }

    public static List<FamilyBackground> getFamilyBackgroundByPerson(PersonalInfo p) {
        try (Session session = HibernateUtil.getSessionFactory().openSession()) {
            return session.createNamedQuery("familyBackground.findByPID", FamilyBackground.class)
                    .setParameter("p", p)
                    .getResultList();
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }
    public static List<FamilyChild> getFamilyChildByPerson(PersonalInfo p) {
        try (Session session = HibernateUtil.getSessionFactory().openSession()) {
            return session.createNamedQuery("familyChild.findByPID", FamilyChild.class)
                    .setParameter("p", p)
                    .getResultList();
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }
    public static List<ContactInfo> getContactInfoByPerson(PersonalInfo p) {
        try (Session session = HibernateUtil.getSessionFactory().openSession()) {
            return session.createNamedQuery("contactInfo.findByPID", ContactInfo.class)
                    .setParameter("p", p)
                    .getResultList();
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }
    public static List<EducBackground> getEducBackgroundByPerson(PersonalInfo p) {
        try (Session session = HibernateUtil.getSessionFactory().openSession()) {
            return session.createNamedQuery("educBackground.findByPID", EducBackground.class)
                    .setParameter("p", p)
                    .getResultList();
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }
}
