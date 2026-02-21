import 'reflect-metadata';
import { AppModule } from './app.module';
import { startApp } from '@tsdevstack/nest-common';

async function bootstrap() {
  // All configuration read automatically from package.json and framework config
  await startApp(AppModule);
}

const x = 2;

bootstrap().catch((error) => {
  console.error('Failed to start the application:', error);
  process.exit(1);
});
