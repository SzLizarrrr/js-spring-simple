--------------------------------------------------------
--  File created - Sunday-November-12-2017   
--------------------------------------------------------
--------------------------------------------------------
--  DDL for Table MSI_USER_MSI_USER_PROFILE
--------------------------------------------------------

  CREATE TABLE "MSI_USER_MSI_USER_PROFILE" 
   (	"ID" NUMBER, 
	"USER_ID" NUMBER, 
	"USER_PROFILE_ID" NUMBER
   ) SEGMENT CREATION IMMEDIATE 
  PCTFREE 10 PCTUSED 40 INITRANS 1 MAXTRANS 255 NOCOMPRESS LOGGING
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1 BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "SYSTEM" ;
--------------------------------------------------------
--  DDL for Sequence MSI_USER_MSI_USER_PROFILE_SEQ
--------------------------------------------------------

   CREATE SEQUENCE  "MSI_USER_MSI_USER_PROFILE_SEQ"  MINVALUE 1 MAXVALUE 9999999999999999999999999999 INCREMENT BY 1 START WITH 1 CACHE 20 NOORDER  NOCYCLE ;
REM INSERTING into MSI_USER_MSI_USER_PROFILE
SET DEFINE OFF;
Insert into MSI_USER_MSI_USER_PROFILE (ID,USER_ID,USER_PROFILE_ID) values (1,1,1);
Insert into MSI_USER_MSI_USER_PROFILE (ID,USER_ID,USER_PROFILE_ID) values (2,2,1);
Insert into MSI_USER_MSI_USER_PROFILE (ID,USER_ID,USER_PROFILE_ID) values (3,3,2);
--------------------------------------------------------
--  DDL for Index MSI_USER_MSI_USER_PROFILE_PK
--------------------------------------------------------

  CREATE UNIQUE INDEX "MSI_USER_MSI_USER_PROFILE_PK" ON "MSI_USER_MSI_USER_PROFILE" ("ID") 
  PCTFREE 10 INITRANS 2 MAXTRANS 255 COMPUTE STATISTICS 
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1 BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "SYSTEM" ;
--------------------------------------------------------
--  DDL for Trigger MSI_USER_MSI_USER_PROFILE_TRG
--------------------------------------------------------

  CREATE OR REPLACE TRIGGER "MSI_USER_MSI_USER_PROFILE_TRG" 
BEFORE INSERT ON MSI_USER_MSI_USER_PROFILE 
FOR EACH ROW 
BEGIN
  <<COLUMN_SEQUENCES>>
  BEGIN
    IF INSERTING AND :NEW.ID IS NULL THEN
      SELECT MSI_USER_MSI_USER_PROFILE_SEQ.NEXTVAL INTO :NEW.ID FROM SYS.DUAL;
    END IF;
  END COLUMN_SEQUENCES;
END;

/
ALTER TRIGGER "MSI_USER_MSI_USER_PROFILE_TRG" ENABLE;
--------------------------------------------------------
--  Constraints for Table MSI_USER_MSI_USER_PROFILE
--------------------------------------------------------

  ALTER TABLE "MSI_USER_MSI_USER_PROFILE" MODIFY ("ID" NOT NULL ENABLE);
  ALTER TABLE "MSI_USER_MSI_USER_PROFILE" MODIFY ("USER_ID" NOT NULL ENABLE);
  ALTER TABLE "MSI_USER_MSI_USER_PROFILE" MODIFY ("USER_PROFILE_ID" NOT NULL ENABLE);
  ALTER TABLE "MSI_USER_MSI_USER_PROFILE" ADD CONSTRAINT "MSI_USER_MSI_USER_PROFILE_PK" PRIMARY KEY ("ID")
  USING INDEX PCTFREE 10 INITRANS 2 MAXTRANS 255 COMPUTE STATISTICS 
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1 BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "SYSTEM"  ENABLE;
