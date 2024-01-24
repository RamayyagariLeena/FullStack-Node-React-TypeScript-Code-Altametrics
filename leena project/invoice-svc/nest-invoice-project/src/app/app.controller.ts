import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('invoices')
export class AppController {
  constructor(private invoicesService: AppService) {}

  @Get()
  findAll() {
    return this.invoicesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.invoicesService.findOne(+id);
  }
}
