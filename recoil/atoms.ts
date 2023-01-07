
import {atom} from 'recoil';
import { localPersist } from '.';

export const userState = atom({
    key: 'userState',
    default: {
        email: '',
        name: '',
        phone: '',
        address: '',
        city: '',
        state: '',
        zip: '',
        country: '',
        token: '',
        isLoggedIn: false,
    },
    effects: [localPersist],
});