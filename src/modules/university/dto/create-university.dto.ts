import { OmitType } from "@nestjs/swagger";
import { University } from "../entities/university.entity";

export class CreateUniversityDto extends OmitType(University, ["id"]) {
}
