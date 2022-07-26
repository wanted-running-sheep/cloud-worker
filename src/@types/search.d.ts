declare module 'search' {
  import { AdminColumnsKeyType } from '@/@types/enum';

  interface QueryInterface {
    category: AdminColumnsKeyType;
    keyword: string;
  }
}
