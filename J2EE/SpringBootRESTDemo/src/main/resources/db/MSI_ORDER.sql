--------------------------------------------------------
--  File created - Sunday-November-12-2017   
--------------------------------------------------------
--------------------------------------------------------
--  DDL for Table MSI_ORDER
--------------------------------------------------------

  CREATE TABLE "MSI_ORDER" 
   (	"ID" NUMBER, 
	"PURCHASE_DATE" DATE
   ) SEGMENT CREATION IMMEDIATE 
  PCTFREE 10 PCTUSED 40 INITRANS 1 MAXTRANS 255 NOCOMPRESS LOGGING
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1 BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "SYSTEM" ;
--------------------------------------------------------
--  DDL for Sequence MSI_ORDER_SEQ
--------------------------------------------------------

   CREATE SEQUENCE  "MSI_ORDER_SEQ"  MINVALUE 1 MAXVALUE 9999999999999999999999999999 INCREMENT BY 1 START WITH 1 CACHE 20 NOORDER  NOCYCLE ;
REM INSERTING into MSI_ORDER
SET DEFINE OFF;
Insert into MSI_ORDER (ID,PURCHASE_DATE) values (1,to_date('04-NOV-17','DD-MON-RR'));
--------------------------------------------------------
--  DDL for Index MSI_ORDER_PK
--------------------------------------------------------

  CREATE UNIQUE INDEX "MSI_ORDER_PK" ON "MSI_ORDER" ("ID") 
  PCTFREE 10 INITRANS 2 MAXTRANS 255 COMPUTE STATISTICS 
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1 BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "SYSTEM" ;
--------------------------------------------------------
--  DDL for Trigger MSI_ORDER_TRG
--------------------------------------------------------

  CREATE OR REPLACE TRIGGER "MSI_ORDER_TRG" 
BEFORE INSERT ON MSI_ORDER 
FOR EACH ROW 
BEGIN
  <<COLUMN_SEQUENCES>>
  BEGIN
    IF INSERTING AND :NEW.ID IS NULL THEN
      SELECT MSI_ORDER_SEQ.NEXTVAL INTO :NEW.ID FROM SYS.DUAL;
    END IF;
  END COLUMN_SEQUENCES;
END;

/
ALTER TRIGGER "MSI_ORDER_TRG" ENABLE;
--------------------------------------------------------
--  Constraints for Table MSI_ORDER
--------------------------------------------------------

  ALTER TABLE "MSI_ORDER" MODIFY ("ID" NOT NULL ENABLE);
  ALTER TABLE "MSI_ORDER" MODIFY ("PURCHASE_DATE" NOT NULL ENABLE);
  ALTER TABLE "MSI_ORDER" ADD CONSTRAINT "MSI_ORDER_PK" PRIMARY KEY ("ID")
  USING INDEX PCTFREE 10 INITRANS 2 MAXTRANS 255 COMPUTE STATISTICS 
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1 BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "SYSTEM"  ENABLE;
