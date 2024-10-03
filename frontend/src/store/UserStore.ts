import { makeAutoObservable } from 'mobx';
import axios from 'axios';
import sha256Encode from '../utils/sha256Encode';

class UserStore {
  public authenticated: boolean = false;

  constructor() {
    makeAutoObservable(this);
  }

  public async login(email: string, password: string) {
    const hashPwd = await sha256Encode(password);
    try {
      const resp = await axios.post(
        '/api/login',
        { email, password: hashPwd },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );
      console.log(resp.data);
      return resp.data;
    } catch (err) {
      if (axios.isAxiosError(err)) {
        if (err.status === 401) {
          console.log(err.response?.data.message);
        } else {
          console.error('Error message:', err);
        }
      } else {
        console.error('Unexpected error:', err);
      }
      throw err;
    }
  }

  public async fetchAccounts() {
    try {
      const resp = await axios.get('/api/accounts', { withCredentials: true });
      console.log(resp.data);
    } catch (err) {
      if (axios.isAxiosError(err)) {
        console.error('Error message:', err);
      } else {
        console.error('Unexpected error:', err);
      }
    }
  }
}

export default UserStore;
