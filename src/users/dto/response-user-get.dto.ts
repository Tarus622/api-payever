import { ApiProperty } from "@nestjs/swagger";

export class UserResponseGetDto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  email: string;

  constructor(data: any) {
    this.name = data.name,
    this.email = data.email
  }
}
