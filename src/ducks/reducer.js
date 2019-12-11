const initialState = {
    users: {
        username: '',
        profile: '',
        userid: 0
    }
}
const GET_USER = 'GET_USER'

export function getUser(username, profie, userid){
    return {
        type: GET_USER,
        payload: 
        {username: '', 
        profile: '',
         userid: 0
        }
    }
}


export default function reducer(state = initialState, action)
{
    const {type, payload} = action
    switch(type){
        case GET_USER:
            return{...state, user:payload}
    }
    return state
}