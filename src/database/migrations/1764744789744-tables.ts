import { MigrationInterface, QueryRunner } from "typeorm";

export class Tables1764744789744 implements MigrationInterface {
    name = 'Tables1764744789744'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "atencion" ADD CONSTRAINT "DF_fe53504fbaa58a6ff0a5f94e944" DEFAULT GETDATE() FOR "fecha_atencion"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "atencion" DROP CONSTRAINT "DF_fe53504fbaa58a6ff0a5f94e944"`);
    }

}
