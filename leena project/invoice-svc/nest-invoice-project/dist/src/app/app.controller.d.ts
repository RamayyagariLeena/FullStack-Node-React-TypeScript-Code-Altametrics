import { AppService } from './app.service';
export declare class AppController {
    private invoicesService;
    constructor(invoicesService: AppService);
    findAll(): Promise<{
        id: number;
        amount: number;
        due_date: Date;
        description: string;
        userId: number;
        payee: string;
        spent: number;
        received: number;
    }[]>;
    findOne(id: string): Promise<{
        id: number;
        amount: number;
        due_date: Date;
        description: string;
        userId: number;
        payee: string;
        spent: number;
        received: number;
    }>;
}
