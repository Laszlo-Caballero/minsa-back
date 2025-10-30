import { MigrationInterface, QueryRunner } from "typeorm";

export class Tables1761275774057 implements MigrationInterface {
    name = 'Tables1761275774057'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "programa" ("programaId" int NOT NULL IDENTITY(1,1), "nombrePrograma" nvarchar(255) NOT NULL, "codigo" nvarchar(255) NOT NULL, "duracion" int NOT NULL, "estado" bit NOT NULL, "descripcion" nvarchar(255) NOT NULL, "requisitos" nvarchar(255) NOT NULL, CONSTRAINT "PK_e031c40af6c3b20f59a0b9d21a5" PRIMARY KEY ("programaId"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "programa"`);
    }

}
