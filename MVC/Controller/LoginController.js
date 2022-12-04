import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
const ip = require('../../API/NetworkConfig');

export class LoginController {
  async getLogin(cnic, password) {
    let request = await axios.get(
      `${ip.address}/api/users/${cnic}/${password}`,
    );

    let response = request.data;
    let u_cnic_check = false,
      u_password_check = false;

    if (response) {
      response.forEach(object => {
        for (const key in object) {
          if (key === 'cnic' && object[key] === cnic) u_cnic_check = true;
          if (key === 'password' && object[key] === password)
            u_password_check = true;
        }
      });

      if (u_cnic_check && u_password_check) {
        AsyncStorage.setItem('cnic', cnic);
        return true;
      }
    }
    return false;
  }
}
