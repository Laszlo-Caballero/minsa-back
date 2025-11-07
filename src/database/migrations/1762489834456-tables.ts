import { MigrationInterface, QueryRunner } from "typeorm";

export class Tables1762489834456 implements MigrationInterface {
    name = 'Tables1762489834456'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "obstetra" ("IdObstetra" int NOT NULL IDENTITY(1,1), "dni" int NOT NULL, "nombres" nvarchar(255) NOT NULL, "apellidos" nvarchar(255) NOT NULL, "fecha_nacimiento" datetime NOT NULL, "correo" nvarchar(255) NOT NULL, "telefono" int NOT NULL, "CMP" nvarchar(255) NOT NULL, "especialidad" nvarchar(255) NOT NULL, "estado" bit NOT NULL, CONSTRAINT "PK_7a1e8f3d4ec54cfb7ace43a520a" PRIMARY KEY ("IdObstetra"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "obstetra"`);
    }

}
