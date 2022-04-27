import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from "@nestjs/common";
import { AnalyticsService } from "./analytics.service";
import { CreateAnalyticsDto } from "./dto/create-analytics.dto";
import { UpdateAnalyticsDto } from "./dto/update-analytics.dto";
import { Roles } from "../../decorators/roles.decorators";
import { RolesGuard } from "../../guards/roles.guard";
import { UserRole } from "../user/models/user.models";

@Controller("analytics")
@UseGuards(RolesGuard)
export class AnalyticsController {
  constructor(private readonly analyticsService: AnalyticsService) {
  }

  @Get("stats")
  @Roles(UserRole.SUPER_ADMIN)
  stats() {
    return this.analyticsService.getStats();
  }

  @Post()
  create(@Body() createAnalyticsDto: CreateAnalyticsDto) {
    return this.analyticsService.create(createAnalyticsDto);
  }

  @Get()
  findAll() {
    return this.analyticsService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.analyticsService.findOne(+id);
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() updateAnalyticsDto: UpdateAnalyticsDto) {
    return this.analyticsService.update(+id, updateAnalyticsDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.analyticsService.remove(+id);
  }
}
