import { getCustomRepository } from "typeorm";
import { ICreateUser } from "../interfaces/ICreateuser";
import { UserRepository } from "../repository/UserRepository";
import { hashSync } from "bcrypt";
import AppError from "../../../server/errors/AppError";


class CreateUserService{
  async execute({ name, email, password, birth_date }: ICreateUser){
    const userRepository = getCustomRepository(UserRepository);
    const userFind = await userRepository.findByEmail(email);

    if(email === userFind?.email){
      throw new AppError("Email already exists!");
    }
  
    const passwordHash = hashSync(password, 8);

    const user = await userRepository.createUser({
      name,
      email,
      password: passwordHash,
      birth_date
    });

    return user;
  }
}

export { CreateUserService }