import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsEmpty, IsEnum, IsNotEmpty, IsOptional, IsString, MinLength } from "class-validator";
import { UserTypes } from "../models/user.models";

export class RegisterUserDto {
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
  @IsEnum(UserTypes)
  @IsOptional()
  type?: UserTypes;

  @ApiProperty()
  @IsOptional()
  roleId?: number;
}
