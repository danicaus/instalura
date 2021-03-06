import { setCookie, destroyCookie } from 'nookies';
import isStaging from '../../infra/env/isStagingEnv';

async function HttpClient(url, { headers, body, ...options }) {
  return fetch(url, {
    headers: {
      ...headers,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
    ...options,
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error('Falha em pegar os dados do servidor');
    });
}

const BASE_URL = isStaging
  ? 'https://instalura-api-omariosouto.vercel.app'
  : 'https://instalura-api-git-master-omariosouto.vercel.app';

const loginService = {
  async login({ username, password }) {
    return HttpClient(`${BASE_URL}/api/login`, {
      method: 'POST',
      body: {
        username,
        password,
      },
    })
      .then((jsonResponse) => {
        const { token } = jsonResponse.data;
        const DAY_IN_SECONDS = 86400;
        setCookie(null, 'APP_TOKEN', token, {
          path: '/',
          maxAge: DAY_IN_SECONDS * 7,
        });

        return {
          token,
        };
      });
  },
  logout() {
    destroyCookie(null, 'API_TOKEN');
  },
};

export default loginService;
