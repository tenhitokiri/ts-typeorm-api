import { User } from './../entities/User.entity';
import path from 'path';
import {DataSource} from 'typeorm'

export const AppDataSource: DataSource = new DataSource({
    type: 'mysql',
    host: process.env.DB_HOST || 'localhost',
    port: Number(process.env.DB_PORT || 49154),
    username: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '.En1el2es1',
    database: process.env.DB_NAME || 'typeormdb',
    entities: [User],
    //entities: [path.join(__dirname, '../entities/*.entity{.ts,.js}')],
    synchronize: true,
    logging: true,
    //migrations: [path.join(__dirname, '/migrations/*{.ts,.js}')],
});

//Rallies up !! 5 lines long attack, archs & cavs only