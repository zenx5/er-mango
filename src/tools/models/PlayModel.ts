import { BaseModel } from "./BaseModel";


/*
    id          Int   @id @default(autoincrement())
    name        String
    place       String
    date        String
    time        String
    seats       Int
*/
export default class PlayModel extends BaseModel {
    static  tableName = 'plays'
}