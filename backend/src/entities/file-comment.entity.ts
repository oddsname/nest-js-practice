import {Column, Entity, ManyToOne, ObjectIdColumn} from "typeorm";
import {File} from "./file.entity";


@Entity()
export class FileComment {

    @ObjectIdColumn()
    public id;

    @Column({type: "text"})
    public text: string

    @Column({type: "datetime"})
    public createdAt: string

    @ManyToOne(() => File, file => file.comments)
    public file: File
}