import axios from "axios"
import { UrlOptionDto } from "../DTOs/url-option.dto"
import { CreateSubmissionsDto } from "../DTOs/create-submissions.dto";


export class Judge0Service {
      constructor(){
            // this.getSubmissions()
      }
      async start(){
            let options: UrlOptionDto = {
                  method: 'GET',
                  url: 'https://judge0-ce.p.rapidapi.com/about',
                  headers: {
                        'X-RapidAPI-Key': '871e804aecmsh715a9caee86ac80p1ad277jsn06f57d1bc817',
                        'X-RapidAPI-Host': 'judge0-ce.p.rapidapi.com'
                  }
            }
            try {
                  const response = await axios.request(options)
                  console.log(response.data);
            } catch (error) {
                  
            }
      }

      async CreateSubmissions(createSubmissionsDto: CreateSubmissionsDto){
            
            const options: UrlOptionDto = {
                  method: 'POST',
                  url: 'https://judge0-ce.p.rapidapi.com/submissions',
                  params: {
                    base64_encoded: 'true',
                    fields: '*'
                  },
                  headers: {
                    'content-type': 'application/json',
                    'Content-Type': 'application/json',
                    'X-RapidAPI-Key': '871e804aecmsh715a9caee86ac80p1ad277jsn06f57d1bc817',
                    'X-RapidAPI-Host': 'judge0-ce.p.rapidapi.com'
                  },
                  data: {
                    language_id: createSubmissionsDto.language,
                    source_code: createSubmissionsDto.source_code,
                    stdin: createSubmissionsDto.input
                  }
                };
                
                try {
                      const response = await axios.request(options);
                      console.log(response.data);
                      return response.data;
                } catch (error) {
                      console.error(error);
                }
      }

      async getSubmissions(token: string){
            
            const options = {
                  method: 'GET',
                  url: `https://judge0-ce.p.rapidapi.com/submissions/${token}`,
                  params: {
                        base64_encoded: 'true',
                        fields: '*'
                  },
                  headers: {
                    'X-RapidAPI-Key': '871e804aecmsh715a9caee86ac80p1ad277jsn06f57d1bc817',
                    'X-RapidAPI-Host': 'judge0-ce.p.rapidapi.com'
                  }
                };
                
                try {
                      const response = await axios.request(options);
                      console.log("testtttttttttttt =>",atob(response.data.stdout))
                      console.log(response.data);
                      return atob(response.data.stdout)
                } catch (error) {
                      console.error(error);
                }
      }


}
