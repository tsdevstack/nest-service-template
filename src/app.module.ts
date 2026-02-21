import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_INTERCEPTOR, APP_GUARD } from '@nestjs/core';
import {
  RedisModule,
  RateLimitModule,
  RateLimitHeadersInterceptor,
  SecretsModule,
  AuthModule,
  AuthGuard,
  ObservabilityModule,
} from '@tsdevstack/nest-common';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    SecretsModule,
    ObservabilityModule,
    AuthModule,
    PrismaModule,
    RedisModule,
    RateLimitModule,
  ],
  providers: [
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: RateLimitHeadersInterceptor,
    },
  ],
})
export class AppModule {}
