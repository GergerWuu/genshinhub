import axios from 'axios';
import { v4 as uuid } from 'uuid';

import { MYS_VERSION, UA_MYS } from '@constants';

const request = axios.create({
  timeout: 12000,
  headers: {
    'user-agent': UA_MYS,
    'content-type': 'application/json; charset=utf-8',
    'x-rpc-app_version': MYS_VERSION,
    'x-rpc-page': 'v3.7.1-ys_#ys',
    'x-rpc-tool_version': 'v3.7.1-ys',
    'x-rpc-client_type': '5',
    'x-rpc-device_name': 'iPhone',
  },
});

request.interceptors.request.use(
  (config) => {
    Object.assign(config.headers, {
      'x-rpc-device_id': uuid(),
    });

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default request;
