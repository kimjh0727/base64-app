import { Module } from '@nestjs/common';
import { EncodeDecodeService } from './encode-decode.service';
import { EncodeDecodeController } from './encode-decode.controller';

@Module({
  providers: [EncodeDecodeService],
  controllers: [EncodeDecodeController],
})
export class EncodeDecodeModule {}
