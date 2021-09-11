import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'appBigNumber'
})
export class BigNumberPipe implements PipeTransform{

  transform(value: string): any {

    if (value[0] === '-') {

      if (value.length === 5) {
        return `${value[0]}${value[1]}K`
      }

      if (value.length === 6) {
        return `${value[0]}${value[1]}${value[2]}K`
      }

      if (value.length === 7) {
        return `${value[0]}${value[1]}${value[2]}${value[3]}K`
      }

      if (value.length === 8) {
        return `${value[0]}${value[1]}M`
      }

      if (value.length === 9) {
        return `${value[0]}${value[1]}${value[2]}M`
      }

      if (value.length === 10) {
        return `${value[0]}${value[1]}${value[2]}${value[3]}M`
      }

      if (value.length === 11) {
        return `${value[0]}${value[1]}B`
      }

      if (value.length === 12) {
        return `${value[0]}${value[1]}${value[2]}B`
      }

      if (value.length === 13) {
        return `${value[0]}${value[1]}${value[2]}${value[3]}B`
      }

      if (value.length === 14) {
        return `${value[0]}${value[1]}T`
      }

      if (value.length === 15) {
        return `${value[0]}${value[1]}${value[2]}T`
      }

      if (value.length === 16) {
        return `${value[0]}${value[1]}${value[2]}${value[3]}T`
      }
    } else {
      if (value.length === 4) {
        return `${value[0]}${value[1]}K`
      }

      if (value.length === 5) {
        return `${value[0]}${value[1]}${value[2]}K`
      }

      if (value.length === 6) {
        return `${value[0]}${value[1]}${value[2]}${value[3]}K`
      }

      if (value.length === 7) {
        return `${value[0]}}M`
      }

      if (value.length === 8) {
        return `${value[0]}${value[1]}M`
      }

      if (value.length === 9) {
        return `${value[0]}${value[1]}${value[2]}M`
      }

      if (value.length === 10) {
        return `${value[0]}B`
      }

      if (value.length === 11) {
        return `${value[0]}${value[1]}B`
      }

      if (value.length === 12) {
        return `${value[0]}${value[1]}${value[2]}B`
      }

      if (value.length === 13) {
        return `${value[0]}T`
      }

      if (value.length === 14) {
        return `${value[0]}${value[1]}T`
      }

      if (value.length === 15) {
        return `${value[0]}${value[1]}${value[2]}T`
      }
    }



  }

}
