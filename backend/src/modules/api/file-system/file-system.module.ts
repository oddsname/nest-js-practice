import {DynamicModule, Module} from '@nestjs/common';
import {TypeOrmModule} from "@nestjs/typeorm";
import {FileSystemService} from "./file-system.service";
import {FOLDER} from "./file-system.inject-const";

@Module({})
export class FileSystemModule {
    static forRoot(options: {folder: string}): DynamicModule {
        return {
            module: FileSystemModule,
            providers: [
                {
                    provide: FOLDER,
                    useValue: options.folder || ''
                },
                FileSystemService
            ],
            exports: [FileSystemService]
        }
    }
}
