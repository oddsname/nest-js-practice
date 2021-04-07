import {Column, Entity, ManyToOne, ObjectIdColumn, OneToMany} from "typeorm";
import {User} from "./user.entity";
import {FileToken} from "./file-token.enitity";
import {FileComment} from "./file-comment.entity";


export enum FileStatusEnum {
    CREATED = 'created',
    DELETED = 'deleted'
}

@Entity()
export class File {

    @ObjectIdColumn()
    public id;

    @Column({type: "string"})
    public name: string

    @Column({type: "string", enum: FileStatusEnum})
    public status: string

    @Column({type: "string"})
    public path: string

    @Column({type: "datetime", nullable: true})
    public deleteFileAt: string

    @Column({type: "datetime"})
    public createdAt: string

    @ManyToOne(() => User, user => user.files)
    public user: User

    @OneToMany(() => FileToken, fileToken => fileToken.file)
    public tokens: FileToken[]

    @OneToMany(() => FileComment, fileComment => fileComment.file)
    public comments: FileComment[]
}