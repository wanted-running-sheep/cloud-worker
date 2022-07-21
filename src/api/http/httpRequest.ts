import { AxiosInstance } from 'axios';

export class HttpRequest {
  private service: AxiosInstance;

  constructor(service: AxiosInstance) {
    this.service = service;
  }

  get<T extends unknown>(url: string) {
    return this.service.get<T>(`${url}`).then((res) => res);
  }

  post<T>(url: string, data: T) {
    return this.service.post(`${url}`, data).catch(console.log);
  }
}
