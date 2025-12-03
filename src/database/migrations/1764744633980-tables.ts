import { MigrationInterface, QueryRunner } from "typeorm";

export class Tables1764744633980 implements MigrationInterface {
    name = 'Tables1764744633980'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "atencion" ("atencionId" int NOT NULL IDENTITY(1,1), "fecha_atencion" datetime NOT NULL, "diagnostico" nvarchar(max) NOT NULL, "nota_clinica" nvarchar(255) NOT NULL, "citaCitaId" int, CONSTRAINT "PK_9df32f7f1f4bf95e9b33b667a0d" PRIMARY KEY ("atencionId"))`);
        await queryRunner.query(`ALTER TABLE "atencion" ADD CONSTRAINT "FK_1def627f3e41215904b044fce66" FOREIGN KEY ("citaCitaId") REFERENCES "cita"("citaId") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "atencion" DROP CONSTRAINT "FK_1def627f3e41215904b044fce66"`);
        await queryRunner.query(`DROP TABLE "atencion"`);
    }

}
