import { MigrationInterface, QueryRunner } from "typeorm";

export class Tables1764746970205 implements MigrationInterface {
    name = 'Tables1764746970205'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "meta" ADD "createdAt" datetime NOT NULL CONSTRAINT "DF_fc5756e00a4aad8649a7df11d42" DEFAULT GETDATE()`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "meta" DROP CONSTRAINT "DF_fc5756e00a4aad8649a7df11d42"`);
        await queryRunner.query(`ALTER TABLE "meta" DROP COLUMN "createdAt"`);
    }

}
