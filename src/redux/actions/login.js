
import { LOGIN } from '../constant/constants';

export const login = (x, y) => {
    return {
        type: LOGIN,
        payload: async() => {
            try {
                const arr = {
                    email: x,
                    password: y
                }
                return arr
            }catch(error){
                console.log('error')
            }
        }
    }
};


