import { OmitType } from "@nestjs/swagger";
import { Hospital } from "../entities/hospital.entity";

export class CreateHospitalDto extends OmitType(Hospital, ['id']) {}
