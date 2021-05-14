import {TypeOrmModuleOptions} from "@nestjs/typeorm";

export const ormConfig: TypeOrmModuleOptions = {
    "type": "mongodb",
    "host": "localhost",
    "port": 27017,
    "username": "root",
    "password": "rootpassword",
    "synchronize": false,
    "database": "admin",
    "useNewUrlParser": true,
    "useUnifiedTopology": true,
    entities: [__dirname + '/../entities/*.{js,ts}'],
    // "autoLoadEntities": true
}

export default ormConfig;