import { action, makeObservable } from 'mobx'
import { enableStaticRendering } from 'mobx-react'
import { useMemo } from 'react'
import UserStore from './UserStore'

// 참고 링크 : https://colinch4.github.io/2021-06-07/mobx/
// 참고 링크 2 : https://www.themikelewis.com/post/nextjs-with-mobx // data fetching + 여러 Store합치고, 설계되는 것 
enableStaticRendering(typeof window === 'undefined')

let store

class Store {
  userStore = new UserStore;

  constructor() {
    makeObservable(this);
  }

  @action hydrate = (data) => {
    if (!data) return
    this.userStore = new UserStore(data);
  }
}

function initializeStore(initialData = null) {
  const _store = store ?? new Store()

  // If your page has Next.js data fetching methods that use a Mobx store, it will
  // get hydrated here
  if (initialData) {
    _store.hydrate(initialData)
  }
  // For SSG and SSR always create a new store
  if (typeof window === 'undefined') return _store
  // Create the store once in the client
  if (!store) store = _store

  return _store
}

export function useStore(initialState) {
  const store = useMemo(() => initializeStore(initialState), [initialState])
  return store
}
