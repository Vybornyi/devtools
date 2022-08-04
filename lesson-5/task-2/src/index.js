// file path: src/index.js

import fetchUser from './profile/gateway';
import { printProfile } from './profile/index';

fetchUser('github').then(userData =>
  printProfile({
    name: userData.name,
    company: userData.location,
  })
);
