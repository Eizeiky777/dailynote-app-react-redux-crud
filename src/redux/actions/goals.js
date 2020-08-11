
import { GOALS } from '../constant/constants';

export const goals = (action) => {
    return {
        type: GOALS,
        payload: async() => {
            try {
                return action
            }catch(error){
                console.log('error')
            }
        }
    }
};


