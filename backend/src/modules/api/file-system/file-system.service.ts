import {Inject, Injectable} from "@nestjs/common";
import {INJECT} from "./file-system.const";
import * as path from "path";

@Injectable()
export class FileSystemService {
    private parentFolder: string = '';
    private path: string = '';

    constructor(
        @Inject(INJECT.FOLDER) parentFolder: string
    ) {
        this.parentFolder = parentFolder;
        this.path = path.resolve(__dirname, '../../../..', 'storage', parentFolder)
    }

    public addSubFolder(folder: string) {
        this.path = path.resolve(this.path, folder)
    }
}