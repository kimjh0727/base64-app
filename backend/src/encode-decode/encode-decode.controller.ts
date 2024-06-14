import { Controller, Post, Body } from '@nestjs/common';
import { EncodeDecodeService } from './encode-decode.service';

@Controller()
export class EncodeDecodeController {
  constructor(private readonly encodeDecodeService: EncodeDecodeService) {}

  @Post('encode')
  encode(@Body('text') text: string) {
    return { encoded: this.encodeDecodeService.encode(text) };
  }

  @Post('decode')
  decode(@Body('encoded') encoded: string) {
    return { decoded: this.encodeDecodeService.decode(encoded) };
  }
}
