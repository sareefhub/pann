import UserResult from "../models/UserResult";
import { IRepository } from "./IRepository";

export class userResultRepo implements IRepository<UserResult> {
    get(id: string | number): Promise<UserResult | null> {
        throw new Error("Method not implemented.");
    }
    create(entity: Partial<UserResult>): Promise<UserResult | null> {
        throw new Error("Method not implemented.");
    }
    update(entity: Partial<UserResult>): Promise<UserResult | null> {
        throw new Error("Method not implemented.");
    }
    delete(id: string | number): Promise<void> {
        throw new Error("Method not implemented.");
    }
    async getAll(filter: any): Promise<UserResult[] | null> {
        return [
            {id: 1,
            announcement: {
                id: 1, 
                topic: '240-124 Midterm 1/2566',
                description: 'คะแนนกลางภาควิชา Web Dev',
                remarkIfPositive:'1',
                remarkIfNegative:'0',
                pubDateTime:new Date('2022-09-08 10:00:00'), 
                userCode: 'suthon.s'},
            result: 'ไม่ได้รับทุน',
            resultType: 1,
            remark: '',
            isPinned: false,
            viewDateTime: new Date('2022-09-08 15:00:00'),
            ackDateTime: new Date('2022-09-08 15:15:15'),
            updateDateTime: new Date('2022-09-07 10:00:00'),
            expireDateTime: new Date('2022-09-15 12:00:00'),
            userCode: '6210110227'
            }
        ]
    }
}