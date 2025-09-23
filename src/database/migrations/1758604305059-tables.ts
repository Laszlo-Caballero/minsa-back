import { MigrationInterface, QueryRunner } from "typeorm";

export class Tables1758604305059 implements MigrationInterface {
    name = 'Tables1758604305059'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ADD "role" nvarchar(255) NOT NULL CONSTRAINT "DF_6620cd026ee2b231beac7cfe578" DEFAULT 'obstetra'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "DF_6620cd026ee2b231beac7cfe578"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "role"`);
    }

}
