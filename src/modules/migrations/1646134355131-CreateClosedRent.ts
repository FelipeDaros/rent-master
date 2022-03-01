import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class CreateClosedRent1646134355131 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "closed_rent",
            columns: [
                {
                    name: "id",
                    type: "uuid",
                    isPrimary: true
                },
                {
                    name: "rent_id",
                    type: "uuid"
                },
                {
                    name: "total_days",
                    type: "integer"
                },
                {
                    name: "price_total",
                    type: "decimal"
                },
                {
                    name: "created_at",
                    type: "timestamp",
                    default: "now()"
                }
            ]
        }))

        await queryRunner.createForeignKey("closed_rent", new TableForeignKey({
            columnNames: ["rent_id"],
            referencedColumnNames: ["id"],
            referencedTableName: "rents",
            onDelete: "CASCADE"
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("closed_rent");
        await queryRunner.dropForeignKey("closed_rent", "rent_id");
    }

}
