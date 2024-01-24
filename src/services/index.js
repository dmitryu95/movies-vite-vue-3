import instance from "./instance";
import services from './movieService'

export default {
    request: services(instance)
}