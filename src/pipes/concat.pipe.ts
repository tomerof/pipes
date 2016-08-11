import { Pipe,PipeTransform } from '@angular/core';

@Pipe({
    name:'concat',

})

export class ConcatPipe implements PipeTransform{
    transform(value:Array|Object, ...args):any {
        if (typeof args[0] == "undefined") return value;
        return [].concat(value,args[0]);
    }
}
