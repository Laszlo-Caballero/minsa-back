import { MigrationInterface, QueryRunner } from "typeorm";

export class Tables1761267854924 implements MigrationInterface {
    name = 'Tables1761267854924'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "programa" ("progrmaId" int NOT NULL IDENTITY(1,1), "nombrePrograma" nvarchar(255) NOT NULL, "codigo" nvarchar(255) NOT NULL, "duracion" int NOT NULL, "estado" bit NOT NULL, "descripcion" nvarchar(255) NOT NULL, "requisitos" nvarchar(255) NOT NULL, CONSTRAINT "PK_fc0bdfe208934fbe0a43f8c9ea7" PRIMARY KEY ("progrmaId"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "programa"`);
    }

}
