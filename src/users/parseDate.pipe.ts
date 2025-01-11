import { ArgumentMetadata, BadRequestException, Injectable, PipeTransform } from "@nestjs/common";

@Injectable()

export class ParseDatePipe implements PipeTransform{
    transform(value: string | number, metadata: ArgumentMetadata) {
        const date = this.convertTimeStamp(value);
        console.log(date)
        console.log(value)

        if(!date || isNaN(Number(date))){
            throw new BadRequestException('invalid date')
        }

        return date

        
    }
    private convertTimeStamp(timestamp : number | string){
        timestamp = +timestamp;

        const isMiliSecond = !(timestamp > (Date.now() + 24 * 60 * 60 * 1000)/1000);
        return isMiliSecond ? new Date(timestamp * 1000) : new Date(timestamp)
    }
}