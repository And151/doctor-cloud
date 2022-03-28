import { Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Profession } from "../../professions/entities/profession.entity";
import { User } from "../../user/entities/user.entity";

@Entity({
  name: "doctor_professions"
})
export class DoctorProfession {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Profession, profession => profession.id)
  @JoinColumn({name: "profession_id"})
  professionId: number;

  @ManyToOne(() => User, user => user.id)
  @JoinColumn({name: "doctor_id"})
  doctorId: number;
}
