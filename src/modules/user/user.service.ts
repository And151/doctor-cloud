import { Injectable } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { User } from "./entities/user.entity";
import { UserHelper } from "../../helpers/user.helper";
import { Repository } from "typeorm/repository/Repository";
import { InjectRepository } from "@nestjs/typeorm";
import { DeleteResult, UpdateResult } from "typeorm";

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    private userHelper: UserHelper
  ) {
  }

  async create(createUserDto: CreateUserDto): Promise<User> {
    createUserDto.password = await this.userHelper.hashPassword(createUserDto.password);
    return this.userRepository.save(createUserDto);
  }

  findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  findOne(id: number): Promise<User> {
    return this.userRepository.findOneById(id);
  }

  getUserByEmail(email: string): Promise<User> {
    return this.userRepository.findOne({
      where: { email },
      select: ["id", "first_name", "last_name", "password", "email", "phone", "type"]
    });
  }

  update(id: number, updateUserDto: UpdateUserDto): Promise<UpdateResult> {
    return this.userRepository.update(id, updateUserDto);
  }

  remove(id: number): Promise<DeleteResult> {
    return this.userRepository.delete(id);
  }

  isPasswordsMatched(pass: string, hashPass: string): Promise<boolean> {
    return this.userHelper.isPasswordMatch(pass, hashPass);
  }
}
