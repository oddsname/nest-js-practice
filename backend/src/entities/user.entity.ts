import {Column, Entity, ObjectIdColumn, OneToMany} from "typeorm";
import {File} from "./file.entity";

@Entity()
export class User {

    @ObjectIdColumn()
    public id;

    @Column({type: "string"})
    public name: string

    @Column({type: "string"})
    public email: string

    @Column({type: "string"})
    public password: string

    @OneToMany(() => File, (file) => file.user)
    public files: File[];
}