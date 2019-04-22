const createReducer = (initialState, handleActions) => {
    if(typeof initialState === 'undefined')
        throw new Error('InitialState should not be undefined')
    
    if(Object.prototype.toString.call(handleActions) !== '[object Object]')
        throw new Error('createReducer expects second argument to be a object representing a reducer')
        
    return (state = initialState, action) =>  
        handleActions.hasOwnProperty(action.type)
            ? handleActions[action.type](state, action)
            : state
}

export default createReducer