import { MigrationInterface, QueryRunner } from "typeorm";

export class Tables1761799088500 implements MigrationInterface {
    name = 'Tables1761799088500'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "paciente" ("IdPaciente" int NOT NULL IDENTITY(1,1), "dni" int NOT NULL, "nombre" nvarchar(255) NOT NULL, "apellidos" nvarchar(255) NOT NULL, "fecha_nacimiento" datetime NOT NULL, "correo" nvarchar(255) NOT NULL, "telefono" int NOT NULL, "direccion" nvarchar(255) NOT NULL, CONSTRAINT "PK_9ab006dc8a5d6c66b5005b54562" PRIMARY KEY ("IdPaciente"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "paciente"`);
    }

}
