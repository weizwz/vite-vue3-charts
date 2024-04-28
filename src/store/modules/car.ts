import { defineStore } from 'pinia'
import { sites } from '@/components/chartPathVirtual/data'
// 第一个参数是id，唯一
export const useCarStore = defineStore('car', {
  state: () => {
    return {
      position: sites[0].value,
      to: sites[0]
    }
  },
  getters: {
    toName: (state) => state.to.nodeName,
    toIdx: (state) => state.to.index
  },
  actions: {
    setToIdx(idx: number) {
      for (const node of sites) {
        if (node.index === idx) {
          this.to = node
          return
        }
      }
    }
  }
})
