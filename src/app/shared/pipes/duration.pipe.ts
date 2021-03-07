import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duFormat',
})
export class FormatDurationPipe implements PipeTransform {
  transform(dur) {
    return typeof dur === 'string'
      ? this.formatDuration(dur.replace(/\s/g, ''))
      : this.formatDuration(dur);
  }

  formatDuration(minutes) {
    var sign = minutes < 0 ? '-' : '';
    var min = Math.floor(Math.abs(minutes));
    var sec = Math.floor((Math.abs(minutes) * 60) % 60);
    return (
      sign + (min < 10 ? '0' : '') + min + ':' + (sec < 10 ? '0' : '') + sec
    );
  }
}
