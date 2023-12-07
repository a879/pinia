import { defineStore } from 'pinia'


/**
state 是store 银行的账户数据。
用户可以进行增删改查操作 
虚拟操作 useStore().X    修改当前页面（包含子页面, 同级页面）?????  数据修改不传递到其他页面， 
除非在其他页面调用之前处理数据， 所以需要action， 更需要同步，而不是异步
直接操作 ...mapWritbaleState(), $patch
还原操作 store.$reset()
记录查询 useStore().$subscribe(callback, {

})
*/


/*
 getters 计算值

 getters: {
    computedState: (state) => {
        return
    }

    computedState2() : <returnType> {
        return this.X
    }
 }

 无法传递参数      通过调用其他/自身getter{return func}的方式接受参数
*/

// actions

export const useStore = defineStore('counter', {
    state: () => {
        return {
            X: null,
        }
    },
    getters: {
        // 直接this 调用
        computedX() {
            return this.X
        },
        
        computedX2: (state) => {
            return state.X
        },
        // 调用其它getter
        computed3() {
            return this.computedX
        },

        getUserById: (state) => {
            return (userId) => state.users.find((user) => user.id === userId)
        },

        getUser: (state) => (userId) => {return state.users.find((user) => user.id === userId)}
        // 柯里化，ES6连续箭头函数
        /*
            functon getUserById(state) {
                return function(userId) {
                    return state.users.find((user) => user.id === userId)
                }
            }
        */
    }
})

