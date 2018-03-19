/*
 * MIT License
 *
 * Copyright (c) 2018
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

export class BasicInfo{
  private _copyrightOwner:string;
  private _copyrightOwnerLink:string;
  private _info:string;
  private _yearFrom:number;


  constructor(copyrightOwner: string, copyrightOwnerLink: string, info: string, yearFrom: number) {
    this._copyrightOwner = copyrightOwner;
    this._copyrightOwnerLink = copyrightOwnerLink;
    this._info = info;
    this._yearFrom = yearFrom;
  }

  get copyrightOwner(): string {
    return this._copyrightOwner;
  }

  set copyrightOwner(value: string) {
    this._copyrightOwner = value;
  }

  get copyrightOwnerLink(): string {
    return this._copyrightOwnerLink;
  }

  set copyrightOwnerLink(value: string) {
    this._copyrightOwnerLink = value;
  }

  get info(): string {
    return this._info;
  }

  set info(value: string) {
    this._info = value;
  }

  get yearFrom(): number {
    return this._yearFrom;
  }

  set yearFrom(value: number) {
    this._yearFrom = value;
  }
}
