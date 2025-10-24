import { MigrationInterface, QueryRunner } from "typeorm";

export class Tables1761272624803 implements MigrationInterface {
    name = 'Tables1761272624803'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`EXEC sp_rename "obstetra.dbo.programa.progrmaId", "programaId"`);
        await queryRunner.query(`EXEC sp_rename "obstetra.dbo.programa.PK_fc0bdfe208934fbe0a43f8c9ea7", "PK_e031c40af6c3b20f59a0b9d21a5"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`EXEC sp_rename "obstetra.dbo.programa.PK_e031c40af6c3b20f59a0b9d21a5", "PK_fc0bdfe208934fbe0a43f8c9ea7"`);
        await queryRunner.query(`EXEC sp_rename "obstetra.dbo.programa.programaId", "progrmaId"`);
    }

}
