import { MigrationInterface, QueryRunner } from "typeorm";

export class Tables1764744988841 implements MigrationInterface {
    name = 'Tables1764744988841'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "atencion" ADD "estado" nvarchar(255) NOT NULL CONSTRAINT "DF_48ea999d629e0ae236444890257" DEFAULT 'Activo'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "atencion" DROP CONSTRAINT "DF_48ea999d629e0ae236444890257"`);
        await queryRunner.query(`ALTER TABLE "atencion" DROP COLUMN "estado"`);
    }

}
