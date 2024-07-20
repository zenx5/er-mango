import { BaseModel } from "./BaseModel";


/*
    id      Int   @id @default(autoincrement())
    name    String
*/
export default class ClientModel extends BaseModel {
    static  tableName = 'clients'
}