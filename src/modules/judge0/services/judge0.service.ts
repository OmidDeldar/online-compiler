import axios from 'axios';
import { UrlOptionDto } from '../DTOs/url-option.dto';
import { CreateSubmissionsDto } from '../DTOs/create-submissions.dto';
import { SubmissionResponseDto } from '../DTOs/submission-response.dto';
import { Injectable } from '@nestjs/common';
import { MongoService } from 'src/utility/mongo/service/mongo.service';
import { CreateLanguageCodeDto } from 'src/utility/mongo/DTOs/create-language-code.dto';

@Injectable()
export class Judge0Service {
  constructor(private mongoService: MongoService) {
    // this.start()
  }

  // check connectivity
  async start() {
    let options: UrlOptionDto = {
      method: 'GET',
      url: 'https://judge0-ce.p.rapidapi.com/about',
      headers: {
        'X-RapidAPI-Key': '871e804aecmsh715a9caee86ac80p1ad277jsn06f57d1bc817',
        'X-RapidAPI-Host': 'judge0-ce.p.rapidapi.com',
      },
    };
    try {
      const response = await axios.request(options);
      console.log(response.data);
    } catch (error) {}
  }

  // create submission(get the code,language, and input)
  async CreateSubmissions(createSubmissionsDto: CreateSubmissionsDto) {
    const languageCode = await this.mongoService.findOneLanguageCode(
      createSubmissionsDto.language,
    );
    const options: UrlOptionDto = {
      method: 'POST',
      url: 'https://judge0-ce.p.rapidapi.com/submissions',
      // url: 'http://localhost:2358/submissions',
      params: {
        //   base64_encoded: 'true',
        //   fields: '*'
      },
      headers: {
        //   'content-type': 'application/json',
        'Content-Type': 'application/json',
        'X-RapidAPI-Key': '871e804aecmsh715a9caee86ac80p1ad277jsn06f57d1bc817',
        'X-RapidAPI-Host': 'judge0-ce.p.rapidapi.com',
      },
      data: {
        language_id: languageCode.id,
        source_code: createSubmissionsDto.source_code,
        stdin: createSubmissionsDto.input,
      },
    };

    try {
      const response = await axios.request(options);
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.error(error.code);
      return { error: error.code };
    }
  }

  // get submission(output)
  async getSubmissions(token: string) {
    const options = {
      method: 'GET',
      url: `https://judge0-ce.p.rapidapi.com/submissions/${token}`,
      // url: `http://localhost:2358/submissions/${token}`,
      params: {
        // base64_encoded: 'true',
        // fields: '*'
      },
      headers: {
        'X-RapidAPI-Key': '871e804aecmsh715a9caee86ac80p1ad277jsn06f57d1bc817',
        'X-RapidAPI-Host': 'judge0-ce.p.rapidapi.com',
      },
    };

    try {
      const response = await axios.request(options);
      
      console.log('response.data =>>>', response.data);
      const outputRes: SubmissionResponseDto = {
        output: response.data.stdout,
        status: response.data.status.description,
        error: response.data.compile_output,
      };
      return outputRes;
    } catch (error) {
      

      const outputRes: SubmissionResponseDto = {
        status: error.code,
        error: error.response.data.messages,
      };
      return outputRes;
    }
  }

  // get languages with their languagecode
  async getLanguages() {
    const options = {
      method: 'GET',
      // url: `https://judge0-ce.p.rapidapi.com/submissions/${token}`,
      url: 'http://localhost:2358/languages/',
      // params: {
      //       base64_encoded: 'true',
      //       fields: '*'
      // },
      // headers: {
      //   'X-RapidAPI-Key': '871e804aecmsh715a9caee86ac80p1ad277jsn06f57d1bc817',
      //   'X-RapidAPI-Host': 'judge0-ce.p.rapidapi.com'
      // }
    };

    try {
      const response = await axios.request(options);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  }
}
