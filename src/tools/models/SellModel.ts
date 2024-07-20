import { BaseModel } from "./BaseModel";


/*
    id          Int   @id @default(autoincrement())
    play        String
    place       String
    createAt    String
    token       String
    seats       Int
*/
export default class SellModel extends BaseModel {
    static  tableName = 'sells'
}