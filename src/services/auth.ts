import { v4 as uuid } from 'uuid';

interface SignInRequestData {
  email: string;
  password: string;
}

const delay = (ms = 750) => new Promise((resolve) => setTimeout(resolve, ms));

export async function signInRequest(data: SignInRequestData) {
  //   await delay();

  return {
    token: uuid(),
    user: {
      name: 'Pablo Paixão',
      email: 'pablo@hotmail.com',
      avatar_url: 'https://github.com/pablo2p.png',
    },
  };
}

export async function recoverUserInformation() {
  //   await delay();

  return {
    user: {
      name: 'Pablo Paixão',
      email: 'pablo@hotmail.com',
      avatar_url: 'https://github.com/pablo2p.png',
    },
  };
}
