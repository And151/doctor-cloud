import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Hospital } from "../../hospital/entities/hospital.entity";
import { User } from "../../user/entities/user.entity";

@Entity({
  name: "appointment"
})
export class Appointment {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, user => user.id)
  @JoinColumn({name: "doctor_id"})
  doctorId: number;

  @ManyToOne(() => User, user => user.id)
  @JoinColumn({name: "user_id"})
  userId: number;

  @ManyToOne(() => Hospital, hospital => hospital.id)
  @JoinColumn({name: "hospital_id"})
  hospitalId: number;

  @Column()
  fee: number;

  @Column({
    type: "date"
  })
  date: Date;

  @Column({
    type: "time"
  })
  time: Date;

  @Column()
  is_approved: boolean;
}
