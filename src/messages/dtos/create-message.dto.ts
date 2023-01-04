import { IsString } from 'class-validator';

export class CreateMessageDto {
  @IsString() // that is our validator
  content: string;
}
