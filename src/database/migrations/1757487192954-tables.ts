import { MigrationInterface, QueryRunner } from "typeorm";

export class Tables1757487192954 implements MigrationInterface {
    name = 'Tables1757487192954'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "posta" ("postaId" int NOT NULL IDENTITY(1,1), "nombre" nvarchar(255) NOT NULL, CONSTRAINT "PK_0d223ba2148f382a26e2a257918" PRIMARY KEY ("postaId"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "posta"`);
    }

}
