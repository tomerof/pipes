import { Pipe,PipeTransform } from '@angular/core';

@Pipe({
    name:'concat',

})

export class ConcatPipe implements PipeTransform{

    private toArray(object:any){
        var array = [];
        for (var key in object) {
            if (object.hasOwnProperty(key)) array.push(object[key]);
        }
        return array;
    }

    transform(value:any, ...args):any[] {
        if (typeof args[0] == "undefined") return value;
        let joined = args[0];
        if (Array.isArray(value)) {
            return Array.isArray(joined)
                ? value.concat(joined)
                : value.concat(this.toArray(joined));
        }

        if (!Array.isArray(value)) {
            let array = this.toArray(value);
            return (Array.isArray(joined))
                ? array.concat(joined)
                : array.concat(this.toArray(joined));
        }
        return value;
    }
}
