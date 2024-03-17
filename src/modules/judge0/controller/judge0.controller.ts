import { Body, Controller, Get, Post, Query } from "@nestjs/common";
import { CreateSubmissionsDto } from "../DTOs/create-submissions.dto";
import { Judge0Service } from "../services/judge0.service";
import { ApiTags } from "@nestjs/swagger";

@ApiTags('Judge0')
@Controller('Judge0')
export class Judge0Controller {
      constructor(
            private judge0Service: Judge0Service
      ){}

      @Post('create/submission')
      createSubmission(@Body() createSubmissionsDto: CreateSubmissionsDto){
            return this.judge0Service.CreateSubmissions(createSubmissionsDto)
      }

      @Get('get/submission')
      getSubmission(@Query('token') token: string){
            return this.judge0Service.getSubmissions(token)
      }
}