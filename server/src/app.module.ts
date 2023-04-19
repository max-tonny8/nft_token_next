import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { ActivityModule } from './activity/activity.module';

@Module({
  imports: [AuthModule, UserModule, ActivityModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
