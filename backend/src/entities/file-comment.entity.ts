import {Column, Entity, ManyToOne, ObjectIdColumn} from "typeorm";
import {File} from "./file.entity";
import {ObjectId} from "mongodb";


@Entity()
export class FileComment {

    @ObjectIdColumn()
    public _id: ObjectId;

    @Column({type: "text"})
    public text: string

    @Column({type: "datetime"})
    public createdAt: string

    @ManyToOne(() => File, file => file.comments)
    public file: File
}