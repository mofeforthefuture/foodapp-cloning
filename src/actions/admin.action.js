import AsyncStorage from '@react-native-community/async-storage';
import request from '../services/request';
import typeGenerator, {action} from './typeGenerator';

export const loginType = typeGenerator('LOGIN');

/**
 * This action login a user and populates the store
 * @param {Object} userData - This is the user data to be sent to the API
 */

export const adminLogin = payload => async dispatch => {
  console.log('.....payload', payload);
  try {
    const response = await request({
      route: `users/login`,
      method: 'post',
      payload: payload,
    });
    return response.data;
  } catch (err) {
    return err.response.data;
  }
};
