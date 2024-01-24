import { Injectable } from '@nestjs/common';
import { Invoice } from '@prisma/client';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class AppService {
  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<Invoice[]> {
    try {
      return this.prisma.invoice.findMany();
  } catch (error) {
      throw new Error('Error fetching invoices');
  }
  }

  async findOne(id: number) : Promise<Invoice>{
    try {
      return this.prisma.invoice.findUnique({
        where: { id },
      });
  } catch (error) {
      throw new Error(`Error fetching invoice with id: ${id}`);
  }
  }
}
