import { ApiUrlType } from '@/@types/enum';
import { AxiosInstance } from 'axios';

export class HttpRequest {
  private service: AxiosInstance;

  constructor(service: AxiosInstance) {
    this.service = service;
  }

  get<T>(url: ApiUrlType) {
    return this.service.get<T>(url).then((res) => res);
  }

  post<T>(url: ApiUrlType, data: T) {
    return this.service.post(url, data);
  }
}
