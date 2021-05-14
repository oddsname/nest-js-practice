import {DynamicModule, Module} from '@nestjs/common';
import {FileSystemService} from "./file-system.service";
import {INJECT} from "./file-system.const";

@Module({})
export class FileSystemModule {
    static forRoot(options: {folder: string}): DynamicModule {
        return {
            module: FileSystemModule,
            providers: [
                {
                    provide: INJECT.FOLDER,
                    useValue: options.folder || ''
                },
                FileSystemService
            ],
            exports: [FileSystemService]
        }
    }
}
