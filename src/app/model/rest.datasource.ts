import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

const PROTOCOL = 'http';
const PORT = 3500;

@Injectable()
export class RestDataSource {
  baseUrl: string="";

  constructor(private http: HttpClient) {

  }


}
