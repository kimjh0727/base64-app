import { Module } from '@nestjs/common';
import { EncodeDecodeModule } from './encode-decode/encode-decode.module';

@Module({
  imports: [EncodeDecodeModule],
})
export class AppModule {}
