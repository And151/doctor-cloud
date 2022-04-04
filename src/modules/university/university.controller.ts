import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, UseGuards } from "@nestjs/common";
import { UniversityService } from "./university.service";
import { CreateUniversityDto } from "./dto/create-university.dto";
import { UpdateUniversityDto } from "./dto/update-university.dto";
import { RolesGuard } from "../../guards/roles.guard";
import { Roles } from "../../decorators/roles.decorators";
import { UserRole } from "../user/models/user.models";

@Controller("university")
@UseGuards(RolesGuard)
export class UniversityController {
  constructor(private readonly universityService: UniversityService) {
  }

  @Post()
  @Roles(UserRole.SUPER_ADMIN, UserRole.ADMIN)
  create(@Body() createUniversityDto: CreateUniversityDto) {
    return this.universityService.create(createUniversityDto);
  }

  @Get()
  @Roles(UserRole.SUPER_ADMIN, UserRole.ADMIN)
  findAll() {
    return this.universityService.findAll();
  }

  @Get(":id")
  @Roles(UserRole.SUPER_ADMIN, UserRole.ADMIN)
  findOne(@Param("id", ParseIntPipe) id: number) {
    return this.universityService.findOne(id);
  }

  @Patch(":id")
  @Roles(UserRole.SUPER_ADMIN, UserRole.ADMIN)
  update(
    @Param("id", ParseIntPipe) id: number,
    @Body() updateUniversityDto: UpdateUniversityDto
  ) {
    return this.universityService.update(id, updateUniversityDto);
  }

  @Delete(":id")
  @Roles(UserRole.SUPER_ADMIN, UserRole.ADMIN)
  remove(@Param("id", ParseIntPipe) id: number) {
    return this.universityService.remove(id);
  }
}
