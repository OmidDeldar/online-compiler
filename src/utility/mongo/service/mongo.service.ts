import { InjectModel } from "@nestjs/mongoose";
import { LanguageCode } from "../schemas/language-code.schema";
import { Model } from "mongoose";
import { CreateLanguageCodeDto } from "../DTOs/create-language-code.dto";


export class MongoService {
      constructor(@InjectModel(LanguageCode.name) private readonly languageCode: Model<LanguageCode>) {
      }



      async createLanguageCode(createLanguageCodeDto: CreateLanguageCodeDto):Promise<LanguageCode>{
            const createLan = new this.languageCode(createLanguageCodeDto)
            return createLan.save()
      }

      async findAll(): Promise<LanguageCode[]>{
            return this.languageCode.find().exec();
      }

      async findOneLanguageCode(name: string): Promise<LanguageCode> {
            return this.languageCode.findOne({ 'name': name }).exec();
      }

      async delete(id: string) {
            const deletedCat = await this.languageCode
              .findByIdAndDelete({ _id: id })
              .exec();
            return deletedCat;
      }
}