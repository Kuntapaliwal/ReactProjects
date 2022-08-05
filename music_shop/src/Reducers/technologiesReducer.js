
export default function technologyReducer(state=null,action)
{
     switch(action.type)
    {
        case 'FETCH_TECHNOLOGIES':return action.payload;
        default:return state;
    }

}