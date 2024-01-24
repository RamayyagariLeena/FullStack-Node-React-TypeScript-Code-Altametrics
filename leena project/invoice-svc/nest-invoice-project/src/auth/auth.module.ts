import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './local-auth.guard';
import { PrismaModule } from 'prisma/prisma.module';
import { PrismaService } from 'prisma/prisma.service';
import { LocalStrategy } from './local.strategy';

@Module({
  imports: [PrismaModule],
  controllers: [AuthController],
  providers: [AuthService, LocalAuthGuard, PrismaService, LocalStrategy ]
})
export class AuthModule {}
