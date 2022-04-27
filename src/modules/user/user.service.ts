import { BadRequestException, Injectable } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { User } from "./entities/user.entity";
import { UserHelper } from "../../helpers/user.helper";
import { Repository } from "typeorm/repository/Repository";
import { InjectRepository } from "@nestjs/typeorm";
import { DeleteResult, UpdateResult } from "typeorm";
import { UserRole, UserTypes } from "./models/user.models";
import { RegisterUserDto } from "./dto/register-user.dto";
import { MailerService } from "@nestjs-modules/mailer";

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    private userHelper: UserHelper,
    private readonly mailerService: MailerService
  ) {
  }

  async create(createUserDto: CreateUserDto): Promise<User> {
    createUserDto.password = await this.userHelper.hashPassword(createUserDto.password);
    const existingUser = await this.getUserByEmail(createUserDto.email);
    if (existingUser) {
      throw new BadRequestException("User with email already exists.");
    }
    return this.userRepository.save(createUserDto);
  }

  findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  findAllDoctors(): Promise<User[]> {
    return this.userRepository.find({
      where: {
        roleId: UserRole.USER,
        type: UserTypes.DOCTOR
      },
      relations: ["hospital"]
    });
  }

  findOne(id: number): Promise<User> {
    return this.userRepository.findOneById(id);
  }

  getUserByEmail(email: string): Promise<User> {
    return this.userRepository.findOne({
      where: { email },
      select: ["id", "first_name", "last_name", "password", "email", "phone", "type", "roleId"]
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

  async register(registerUserDto: RegisterUserDto) {
    registerUserDto.password = await this.userHelper.hashPassword(registerUserDto.password);
    const existingUser = await this.getUserByEmail(registerUserDto.email);
    if (existingUser) {
      throw new BadRequestException("User with email already exists.");
    }
    return this.userRepository.save(registerUserDto);
  }

  sendApprovalEmail(email: string, confirmationCode: string) {
    return this.mailerService.sendMail({
      to: email, // list of receivers
      from: "noreply@doctor.cloud", // sender address
      subject: "Confirmation Code", // Subject line
      text: `Your confirmation code is ${confirmationCode}`, // plaintext body
      html: "<b>welcome</b>" // HTML body content
    });
  }

  async doctorsCount() {
    return this.userRepository.count({
      where: {
        type: UserTypes.DOCTOR
      }
    });
  }

  async patientsCount() {
    return this.userRepository.count({
      where: {
        type: UserTypes.DOCTOR
      }
    });
  }
}
