import { ApiProperty } from "@nestjs/swagger"

export class CreateSubmissionsDto {
      @ApiProperty()
      language: number
      @ApiProperty()
      input: string
      @ApiProperty()
      source_code: string
}