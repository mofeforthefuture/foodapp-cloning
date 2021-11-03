import AsyncStorage from '@react-native-community/async-storage';
import request from '../services/request';
import typeGenerator, { action } from './typeGenerator';

export const loginType = typeGenerator('LOGIN');

/**
 * This action login a user and populates the store
 * @param {Object} userData - This is the user data to be sent to the API
*/

export const fetchTenant = (payload) => async (dispatch) => {
  try {
    const response = await request({
      route: `clocking/${payload}`,
      method: 'get',
    });
    return response.data

  } catch (err) {
    console.log('...Error Message', err.response);
  }
};

export const fetchTenantBranch = (payload, companyId) => async (dispatch) => {
  try {
    const response = await request({
      route: `clocking/branch/${companyId}/${payload}`,
      method: 'get',
    });
    return response.data

  } catch (err) {
    console.log('...Error Message', err.response);
  }
};

export const fetchCompanyBranchEmployees = (companyId, branchID) => async (dispatch) => {
  try {
    const response = await request({
      route: `clocking/employees/${companyId}/${branchID}`,
      method: 'get',
    });
    return response.data

  } catch (err) {
    console.log('...Error Message', err.response);
  }
};