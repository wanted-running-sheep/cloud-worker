declare module 'request' {
  import { TransportationType, InputNameType } from '@/@types/enum';

  interface RegionDataInterface {
    [key: string]: string[];
  }

  type GenderType = 'F' | 'M';

  interface UserInterface {
    id: number;
    name: InputNameType;
    gender: GenderType;
    applyDate: string;
    birth: string;
    region: {
      city: string;
      district: string;
    };
    phone: string;
    email: string;
    transportation: TransportationType[];
    isWinning: boolean;
  }

  type UserInterfaceWithoutIdType = Omit<UserInterface, 'id'>;
}
