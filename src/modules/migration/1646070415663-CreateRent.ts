import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class CreateRent1646070415663 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "rents",
            columns: [
                {
                    name: "id",
                    type: "uuid",
                    isPrimary: true
                },
                {
                    name: "total_price",
                    type: "decimal"
                },
                {
                    name: "car_id",
                    type: "uuid"
                },
                {
                    name: "user_id",
                    type: "uuid"
                },
                {
                    name: "created_at",
                    type: "timestamp",
                    default: "now()"
                }
            ]
        }))
        await queryRunner.createForeignKey("rents", new TableForeignKey({
            columnNames: ["car_id"],
            referencedColumnNames: ["id"],
            referencedTableName: "cars",
            onDelete: "CASCADE"
        }));
        
        await queryRunner.createForeignKey("rents", new TableForeignKey({
            columnNames: ["user_id"],
            referencedColumnNames: ["id"],
            referencedTableName: "users",
            onDelete: "CASCADE"
        })) 
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("rents");
        await queryRunner.dropForeignKey("rents", "car_id");
        await queryRunner.dropForeignKey("rents", "user_id");
    }

}
