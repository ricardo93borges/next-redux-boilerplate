
import { expect } from 'chai'
import user from './user'
import { STORE_USER, DELETE_USER } from '../actions/actionsTypes'

const userData = {id:1, name:'Snake', email:'snake@mgs.com'}

describe('User reducer tests', () => {

    it('should store a user', () => {
        const before = {}
        const action = {
            type: STORE_USER,
            payload: {user: userData}
        }
        const after = userData
        expect(user(before, action)).to.be.deep.equal(after)
    })
    
    it('should delete a user', () => {
        const before = userData
        const action = {
            type: DELETE_USER
        }
        const after = {}
        expect(user(before, action)).to.be.deep.equal(after)
    })

})    