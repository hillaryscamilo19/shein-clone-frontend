import { Pipe, PipeTransform } from '@angular/core';
// import * as dataRaw from '../data/store.json';
@Pipe({
  name: 'filtershop',
})
export class FiltershopPipe implements PipeTransform {
  pipes: Array<string> = [];

  transform(value: Array<any>, args: string | null = null) {
    const result = [];
     for(const post of value){
       if(post.title.indexOf(args) > -1){
         result.push(post)
       };
     };
     return result
  }


  filt(value: Array<any>, arg: string | null = null ){
    const buton = [];
    for(const pip of value){
      if(pip.object.indexOf(arg) > -1){
        buton.push(pip)
      }
    }
  }
}