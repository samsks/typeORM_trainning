import { hashSync } from "bcryptjs";
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  BeforeInsert,
  BeforeUpdate,
} from "typeorm";

@Entity("users")
class User {
  //Para uuid
  // @PrimaryGeneratedColumn('uuid')
  // id: string

  //para float
  //   @Column({ type: "float" })
  //   myFloat: number;

  //Valores default
  // @Column({ length: 20, default: 'Fullstack' })
  // type: string;

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 50 })
  name: string;

  @Column({ length: 50, unique: true })
  email: string;

  @Column({ length: 120 })
  password: string;

  @BeforeInsert()
  @BeforeUpdate()
  hashPassword(): void {
    this.password = hashSync(this.password, 10);
  }

  @Column({ length: 20, default: "Fullstack" })
  type: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}

export default User;
