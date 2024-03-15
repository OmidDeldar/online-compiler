import axios from "axios"
import { UrlOptionDto } from "./DTOs/url-option.dto"


export class Judge0Service {
      constructor(){
            this.start()
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



}
