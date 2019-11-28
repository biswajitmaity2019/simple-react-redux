import* as ActionType from './Action';

const initialState={
    data:0
};

const reducer= (state=initialState,action)=>{
    switch(action.type)
    {
        case ActionType.INCREASE_DATA:
                //console.log(action.datavalue);
            return{
               ...state,
               data: action.datavalue+1
               
            };

            case ActionType.DECREASE_DATA:
                   // console.log(action.datavalue);
            return{
               ...state,
               data: action.datavalue-1
               
            };
            default:
                return{

                };
    }
}
export default reducer;