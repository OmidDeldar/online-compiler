import { ApiProperty } from "@nestjs/swagger"

export class CreateSubmissionsDto {
      @ApiProperty()
      language: string
      @ApiProperty()
      input: string
      @ApiProperty()
      source_code: string
}