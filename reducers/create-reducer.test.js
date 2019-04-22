import { expect } from 'chai'
import createReducer from './create-reducer'

describe('create-reducer tests', () => {

    const initialState = 0
    const reducer = createReducer(0, {
        'INCREMENT': (state, action) => state+1,
        'DECREMENT': (state, action) => state-1
    })

    it('should be a function', () => {
        expect(createReducer).to.be.a('function')
    })

    it('createReducer(initialState, {}) should return a reducer function', () => {
        expect(createReducer([], {})).to.be.a('function')
    })

    it('should create a reducer', () => {
        const before = 0
        const action = {type:'INCREMENT'}
        const after = 1

        expect(reducer(before, action)).to.be.equal(after)
    })

    it('reducer should return latest state if action is unknown', () => {
        const before = 3
        const action = {type:'UNKNOWN'}
        const after = 3

        expect(reducer(before, action)).to.be.equal(after)
    })

    it('reducer should return initialState when latest state is undefined', () => {
        const before = undefined
        const action = {}
        const after = initialState

        expect(reducer(before, action)).to.be.equal(after)
    })
    
    it('initialState should not be undefined', () => {
        try{
            createReducer()
        }catch(e){
            expect(e.message).to.be.equal('InitialState should not be undefined')
        }
    })

    it('handleAction should not be different of object', () => {
        try{
            createReducer([])
        }catch(e){
            expect(e.message).to.be.equal('createReducer expects second argument to be a object representing a reducer')
        }
    })
})    