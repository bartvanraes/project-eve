import { PipeTransform, Pipe } from "@angular/core";

@Pipe({name: 'keys'})
export class KeyPipe implements PipeTransform {
  transform(value, args:string[]) : any {
    let keys = [];
    
    for (let i = 0; i < value; i++) {
        keys.push({key: i, value: value[i]});
    }

    return keys;
  }
}