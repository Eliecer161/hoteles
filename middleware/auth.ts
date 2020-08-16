import { Context } from '@nuxt/types'

export default function ({ store, redirect, route }: Context) {
  if (store.state.authUser?.uid) {
    if (route.fullPath === '/login' || route.fullPath === '/register') {
      redirect(200, '/')
    }
  } else if (route.fullPath !== '/login' && route.fullPath !== '/register')
    redirect(200, '/login')
}
