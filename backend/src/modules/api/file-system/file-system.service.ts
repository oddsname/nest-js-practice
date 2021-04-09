import {Inject, Injectable} from "@nestjs/common";
import {FOLDER} from "./file-system.inject-const";
import * as fs from 'fs'
import * as path from "path";

@Injectable()
export class FileSystemService {
    private parentFolder: string = '';
    private path: string = '';

    constructor(
        @Inject(FOLDER) parentFolder: string
    ) {
        this.parentFolder = parentFolder;
        this.path = path.resolve(__dirname, '../../..', 'storage', parentFolder)
    }

    public addSubFolder(folder: string) {
        this.path = path.resolve(this.path, folder)
    }
}