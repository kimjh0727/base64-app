import { Injectable } from '@nestjs/common';

@Injectable()
export class EncodeDecodeService {
  encode(text: string): string {
    return Buffer.from(text).toString('base64');
  }

  decode(encoded: string): string {
    return Buffer.from(encoded, 'base64').toString('utf8');
  }
}
