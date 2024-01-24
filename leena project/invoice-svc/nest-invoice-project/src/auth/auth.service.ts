import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}

  async validateUser(email: string, pass: string): Promise<any> {
    try {
      const user = await this.prisma.user.findUnique({
        where: { email },
      });
      if (!user) {
        throw new UnauthorizedException('Invalid credentials');
      }
      if (user && user.password === pass) {
        const { password, ...result } = user;
        return result;
      }
      return null;
    } catch (error) {
      throw new Error('Error during user authentication');
    }
  }
}
