import 'bootstrap/dist/css/bootstrap.min.css'
import './main.scss'

//enrutamiento de las pestañas
import { router } from "./router/index.routes";

router(window.location.hash)
window.addEventListener('hashchange', () => {
    console.log(window.location.hash) //te da la url actual
    router(window.location.hash)
})