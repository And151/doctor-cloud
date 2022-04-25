import { Entity, JoinColumn, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { Hospital } from "../../hospital/entities/hospital.entity";
import { User } from "../../user/entities/user.entity";

@Entity({
  name: "user_hospital_hospital"
})
export class HospitalDoctor {
  @PrimaryColumn({ primary: false })
  @ManyToOne(() => User, user => user.id)
  @JoinColumn({ name: "userId" })
  userId: number;

  @PrimaryColumn({ primary: false })
  @ManyToOne(() => Hospital, hospital => hospital.id)
  @JoinColumn({ name: "hospitalId" })
  hospitalId: number;
}
