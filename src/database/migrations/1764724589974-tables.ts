import { MigrationInterface, QueryRunner } from "typeorm";

export class Tables1764724589974 implements MigrationInterface {
    name = 'Tables1764724589974'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "obstetra" ADD "userUserId" int`);
        await queryRunner.query(`CREATE UNIQUE INDEX "REL_f1b790eb1d89e716b809243d49" ON "obstetra" ("userUserId") WHERE "userUserId" IS NOT NULL`);
        await queryRunner.query(`ALTER TABLE "obstetra" ADD CONSTRAINT "FK_f1b790eb1d89e716b809243d492" FOREIGN KEY ("userUserId") REFERENCES "user"("userId") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "obstetra" DROP CONSTRAINT "FK_f1b790eb1d89e716b809243d492"`);
        await queryRunner.query(`DROP INDEX "REL_f1b790eb1d89e716b809243d49" ON "obstetra"`);
        await queryRunner.query(`ALTER TABLE "obstetra" DROP COLUMN "userUserId"`);
    }

}
