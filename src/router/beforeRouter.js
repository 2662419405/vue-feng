import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

export const beforeRouter = (to, from, next) => {
  NProgress.start()
  next()
}

export const afterRouter = (to, from) => {
  NProgress.done()
  console.log(from)
}
