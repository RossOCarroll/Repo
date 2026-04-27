interface Account {
  userName: string;
  email: string;
  readonly accountCreationDate: string;
}

let user: Account = {
  userName: 'Bill',
  email: 'bill@bool.com',
  accountCreationDate: '12/23/14',
};

user.accountCreationDate = '1/3/15';
