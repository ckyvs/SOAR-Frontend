import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BaseURLService {

  public BASE_URL = window["cfgApiBaseUrl"]+"/api";
  constructor() { }
}
