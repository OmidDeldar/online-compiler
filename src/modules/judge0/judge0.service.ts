import axios from "axios"
import { UrlOptionDto } from "./DTOs/url-option.dto"


export class Judge0Service {
      constructor(){
            this.getSubmissions()
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

      async CreateSubmissions(){
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
                    language_id: 76,
                    source_code: 'I2luY2x1ZGUgPHN0ZGlvLmg+CgppbnQgbWFpbih2b2lkKSB7CiAgY2hhciBuYW1lWzEwXTsKICBzY2FuZigiJXMiLCBuYW1lKTsKICBwcmludGYoImhlbGxvLCAlc1xuIiwgbmFtZSk7CiAgcmV0dXJuIDA7Cn0=',
                    stdin: 'SnVkZ2Uw'
                  }
                };
                
                try {
                      const response = await axios.request(options);
                      console.log(response.data);
                } catch (error) {
                      console.error(error);
                }
      }

      async getSubmissions(){
            
            const options = {
                  method: 'GET',
                  url: 'https://judge0-ce.p.rapidapi.com/submissions/ca77585f-8a3d-46d2-b94a-03650a1436b4',
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
                } catch (error) {
                      console.error(error);
                }
      }


}
