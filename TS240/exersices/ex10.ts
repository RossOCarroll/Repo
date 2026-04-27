type Device = {
  manufacture: string;
  model: string;
  year: number;
};

let computer: Device = {
  manufacture: 'Dell',
  model: 'T1000',
  year: 2003,
};


let smartPhone = {
  manufacture: 'Apple',
  model: 'Iphone 13',
  year: 2005,
  hasHeadphoneJack: false,
}

let anotherDevice: Device = smartPhone;
