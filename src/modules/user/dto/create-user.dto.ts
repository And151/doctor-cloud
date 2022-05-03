import { ApiProperty } from "@nestjs/swagger";
import {
  IsEmail, IsEnum,
  IsNotEmpty, IsNumber, IsOptional,
  IsString,
  MinLength
} from "class-validator";
import { UserTypes } from "../models/user.models";

export class CreateUserDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  first_name: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  last_name: string;

  @ApiProperty()
  @IsString()
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  phone: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  @MinLength(8)
  password: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  imageUrl: string;

  @ApiProperty()
  @IsNumber()
  @IsOptional()
  appointmentFee: number;

  @ApiProperty()
  @IsEnum(UserTypes)
  type: UserTypes;

  @ApiProperty()
  @IsNotEmpty()
  roleId: number;
}
