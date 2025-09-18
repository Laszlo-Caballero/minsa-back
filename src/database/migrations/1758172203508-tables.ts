import { MigrationInterface, QueryRunner } from "typeorm";

export class Tables1758172203508 implements MigrationInterface {
    name = 'Tables1758172203508'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "user" ("userId" int NOT NULL IDENTITY(1,1), "username" nvarchar(255) NOT NULL, "password" nvarchar(255) NOT NULL, CONSTRAINT "PK_d72ea127f30e21753c9e229891e" PRIMARY KEY ("userId"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "user"`);
    }

}
