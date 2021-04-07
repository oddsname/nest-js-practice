import {TypeOrmModuleOptions} from "@nestjs/typeorm";

const ormConfig: TypeOrmModuleOptions = {
    "type": "mongodb",
    "host": "localhost",
    "port": 27017,
    "username": "root",
    "password": "rootpassword",
    "synchronize": true,
    "database": "admin",
    "useNewUrlParser": true,
    "useUnifiedTopology": true,
    "autoLoadEntities": true
}

export default ormConfig;