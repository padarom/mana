export default function ({ store, route, redirect }) {
  let login = '/login'
  if (!store.state.authUser && route.path !== login) {
    return redirect(login)
  }

  if (store.state.authUser && route.path === login) {
    return redirect('/')
  }
}
