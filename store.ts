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


/*

  actions 定义业务逻辑
  可以是异步操作
 相当于组件中的methods

*/

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
        // 尾调用Tail Call： 函数的最后一步是调用另一个函数
        /*
            function f(x) {
                return g(x);
            }

            这三种不属于尾调用
            function f(x) { let y = g(x); return y }
            function f(x) { return g(x) + 1 }
            function f(x) { g(x) }  === function f(x) { g(x); return undefined; }

        */
        //  尾调用优化
        /*
            functon getUserById(state) {
                return function(userId) {
                    return state.users.find((user) => user.id === userId)
                }
            }
        */
    },
    actions: {
        increment() {
            this.X
        },
        async registerUser(login, password) {
            try {
              this.userData = await api.post({ login, password })
            } catch (error) {
              return error
            }
          },
    }
})

