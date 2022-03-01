import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateCars1645649129076 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "cars",
            columns: [
                {
                    name: "id",
                    type: "uuid",
                    isPrimary: true
                },
                {
                    name: "model",
                    type: "varchar",
                },
                {
                    name: "year",
                    type: "varchar"
                },
                {
                    name: "price_hour",
                    type: "decimal"
                },
                {
                    name: "created_at",
                    type: "timestamp",
                    default: "now()"
                },
                {
                    name: "active",
                    type: "varchar(1)",
                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("cars");
    }

}
