import { Module } from '@nestjs/common';
import { EmpresasController } from './empresas.controller';
import { AuthModule } from '../auth/auth.module';
import { AppModule } from '../app/app.module';
import { HealthController } from './health.controller';
import { PortsModule } from '../ports/ports.module';

@Module({
  imports: [AuthModule, AppModule, PortsModule],
  controllers: [HealthController, EmpresasController],
})
export class WebModule {}
