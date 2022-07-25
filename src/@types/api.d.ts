declare module 'request' {
  interface RegionDataInterface {
    [key: string]: string[];
  }

  interface UserInterface {
    name: string;
    gender: 'F' | 'M';
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
