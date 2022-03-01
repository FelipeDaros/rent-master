import { EntityRepository, Repository } from "typeorm";
import { User } from "../entity/User";
import { ICreateUser } from "../interfaces/ICreateuser";


@EntityRepository(User)
class UserRepository extends Repository<User>{
  async findById(id: string): Promise<User | undefined>{
    const user = this.findOne({
      where: {
        id
      }
    });

    return user;
  }

  async createUser({ name, email, password, birth_date }:ICreateUser): Promise<ICreateUser>{
    const car = this.create({ name, email, password, birth_date })
    await this.save(car);

    return car;
  }

  async listUsers():Promise<User[] | undefined>{
    const users = await this.find();

    return users;
  }

  async findByEmail(email: string): Promise<User | undefined>{
    const userEmail = await this.findOne({
      where: {
        email
      }
    });

    return userEmail;
  }
}


export { UserRepository }