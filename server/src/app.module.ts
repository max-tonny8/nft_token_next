import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { ActivityModule } from './activity/activity.module';

@Module({
  imports: [AuthModule, UserModule, ActivityModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
