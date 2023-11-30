// src/app/custom-time-format.pipe.ts
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customTimeFormat'
})
export class CustomTimeFormatPipe implements PipeTransform {
  transform(value: string): string {
    const [hours, minutes] = value.split(':');
    return `${hours}h:${minutes}m`;
  }
}
