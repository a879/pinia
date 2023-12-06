import { defineStore } from 'pinia'

// state 是store 银行的账户数据。
// 用户可以进行增删改查操作
// 虚拟操作 useStore().X
// 直接操作 ...mapWritbaleState(), $patch
// 还原操作 store.$reset()
// 记录查询 useStore().$subscribe(callback, {

// })



// getters
// actions

export const useStore = defineStore('counter', {
    state: () => {
        return {

        }
    },
    actions: {

    }
})

