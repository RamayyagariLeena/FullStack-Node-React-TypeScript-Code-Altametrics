import { Invoice } from '@prisma/client';
import { PrismaService } from 'prisma/prisma.service';
export declare class AppService {
    private prisma;
    constructor(prisma: PrismaService);
    findAll(): Promise<Invoice[]>;
    findOne(id: number): Promise<Invoice>;
}
