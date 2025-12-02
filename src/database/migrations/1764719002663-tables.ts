import { MigrationInterface, QueryRunner } from "typeorm";

export class Tables1764719002663 implements MigrationInterface {
    name = 'Tables1764719002663'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "cita" ("citaId" int NOT NULL IDENTITY(1,1), "fecha_cita" datetime NOT NULL, "estado" nvarchar(255) NOT NULL, "motivo" nvarchar(255) NOT NULL, "programaProgramaId" int, "pacienteIdPaciente" int, "obstetraIdObstetra" int, CONSTRAINT "PK_2e65f3ada2c38a48241a056dc9d" PRIMARY KEY ("citaId"))`);
        await queryRunner.query(`ALTER TABLE "cita" ADD CONSTRAINT "FK_fe9b861a150f618479f17663e92" FOREIGN KEY ("programaProgramaId") REFERENCES "programa"("programaId") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "cita" ADD CONSTRAINT "FK_a7e9613e1a7e4c4a2d38b0365c0" FOREIGN KEY ("pacienteIdPaciente") REFERENCES "paciente"("IdPaciente") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "cita" ADD CONSTRAINT "FK_de2198f07ccbaf35acee414b2ad" FOREIGN KEY ("obstetraIdObstetra") REFERENCES "obstetra"("IdObstetra") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "cita" DROP CONSTRAINT "FK_de2198f07ccbaf35acee414b2ad"`);
        await queryRunner.query(`ALTER TABLE "cita" DROP CONSTRAINT "FK_a7e9613e1a7e4c4a2d38b0365c0"`);
        await queryRunner.query(`ALTER TABLE "cita" DROP CONSTRAINT "FK_fe9b861a150f618479f17663e92"`);
        await queryRunner.query(`DROP TABLE "cita"`);
    }

}
