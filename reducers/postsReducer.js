export default (state = [], action) => {
    switch (action.type) {
        case 'FETCH_POST':
            return action.payload
            break;
    
        default:
            return state;
    }
};