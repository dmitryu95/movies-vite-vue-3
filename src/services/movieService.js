export default function(instance) {
  return {
    getAllMovies(page, payload) {
      return instance.get(`v2.2/films?page=${page}`, payload);
    },
    getMovie(id, payload) {
      return instance.get(`v2.2/films/${id}`, payload);
    },
  }
};