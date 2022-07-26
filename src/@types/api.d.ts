declare module 'request' {
  interface RegionDataInterface {
    [key: string]: string[];
  }

  type GenderType = 'F' | 'M';

  interface UserInterface {
    name: string;
    gender: GenderType;
    applyDate: string;
    birth: string;
    region: {
      city: string;
      district: string;
    };
    phone: string;
    email: string;
    transportation: string[];
    isWinning: boolean;
  }
}
