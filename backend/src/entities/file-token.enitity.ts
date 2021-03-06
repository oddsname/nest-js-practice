import {Column, Entity, ManyToOne, ObjectIdColumn} from "typeorm";
import {File} from "./file.entity";
import {ObjectId} from "mongodb";


export enum FileTokenStatusEnum {
    ACTIVE= 'active',
    NOT_ACTIVE = 'not_active'
}

export enum FileTokenTypeEnum {
    ONE_TIME = "one-time",
    MANY_TIME = "many-time",
    PUBLIC = "public"
}

@Entity()
export class FileToken {

    @ObjectIdColumn()
    public _id: ObjectId;

    @Column({type: "string", unique: true})
    public token: string

    @Column({type: "string", enum: FileTokenTypeEnum})
    public type: string

    @Column({type: "string", enum: FileTokenStatusEnum})
    public status: string

    @Column({type: "int"})
    public views: number

    @Column({type: "datetime"})
    public createdAt: string

    @ManyToOne(() => File, file => file.tokens)
    public file: File
}