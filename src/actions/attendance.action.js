import AsyncStorage from '@react-native-community/async-storage';
import request from '../services/request';

export const attendanceRequest = (payload, type) => async dispatch => {
  console.log('.....payload', payload);
  try {
    const response = await request({
      route: `/clocking/employees/${type}`,
      method: 'post',
      payload: payload,
    });
    return response.data;
  } catch (err) {
    console.log('...Error Message', err.response.data);
    const error = err.response.data;
    return error;
  }
};
