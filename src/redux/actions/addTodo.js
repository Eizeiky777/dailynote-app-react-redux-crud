
import { ADDTODO } from '../constant/constants';

export const addTodo = (x) => {
    return {
        type: ADDTODO,
        payload: async() => {
            try {
                
                return x
            }catch(error){
                console.log('error')
            }
        }
    }
};


