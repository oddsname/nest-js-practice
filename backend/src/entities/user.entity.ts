import {BeforeInsert, Column, Entity, ObjectIdColumn, OneToMany} from "typeorm";
import {File} from "./file.entity";
import { hash, compareSync } from "bcrypt"

@Entity()
export class User {

    @ObjectIdColumn()
    public id;

    @Column({type: "string"})
    public name: string

    @Column({type: "string", unique: true})
    public email: string

    @Column({type: "string"})
    public password: string

    @OneToMany(() => File, file => file.user)
    public files: File[];

    @BeforeInsert()
    async hashPassword() {
        this.password = await hash(this.password, 10);
    }

    checkPassword(password: string): boolean {
        return compareSync(password, this.password)
    }
}