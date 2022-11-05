import { acceptHMRUpdate, defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => {
    return {
      savedName: '' as string,
      previousNames: [] as string[],
    }
  },
  getters: {
    usedNames: state => state.previousNames,
    otherNames(): string[] {
      return this.previousNames.filter(f => f !== this.savedName)
    },
  },
  actions: {
    setNewName(name: string) {
      if (this.savedName)
        this.previousNames.push(this.savedName)

      this.savedName = name
    },
  },
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot))
