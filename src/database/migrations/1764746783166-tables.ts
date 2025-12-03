import { MigrationInterface, QueryRunner } from "typeorm";

export class Tables1764746783166 implements MigrationInterface {
    name = 'Tables1764746783166'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "meta" ("metaId" int NOT NULL IDENTITY(1,1), "objetivo" nvarchar(255) NOT NULL, "descripcion" nvarchar(255) NOT NULL, "estado" nvarchar(255) NOT NULL CONSTRAINT "DF_dd4bc041a8ed015c01c63ad60fb" DEFAULT 'Activo', CONSTRAINT "PK_78d9197636831d183bba1765e4e" PRIMARY KEY ("metaId"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "meta"`);
    }

}
