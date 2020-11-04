//creamos las rutas de los componentes
import Home from './home.controller'
import Posts from './posts.controller'
import notFound from './notFound.controller'

const pages = {
    home: Home,
    posts: Posts,
    notFound: notFound

}

export { pages };