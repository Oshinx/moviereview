import {Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name:'emptyResponse'
})

export class EmptyResponse implements PipeTransform{

    transform(value: any):string{
         if(value === 'undefined'){
             return 'N/A';
         }
         else {
             return value;
         }
    }
}