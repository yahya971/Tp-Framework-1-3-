import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'defaultImage'
})
export class DefaultImagePipe implements PipeTransform {

  transform(value: any): any {
    if (value.trim() == '')
      return 'default_image.png'
    else return value;
  }

}
