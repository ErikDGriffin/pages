export function filterFilmsByDirector(films, directorName) {
    if(directorName === ""){
        return films;
    }
   return  films.filter((film) => film.director == directorName);
        
}

export function getFilmStats(list) {
    if (!Array.isArray(list) || list.length === 0) {
      return {
        avg_score: 0,
        acc_score: 0,
        total: 0,
        latest: 0,
      };
    }
  
    const totalFilms = list.length;
    const totalScore = list.reduce((acc, film) => acc + film.rt_score, 0);
    const avgScore = totalScore / totalFilms;
    const latestYear = Math.max(...list.map((film) => parseInt(film.release_date, 10) || 0));
  
    return {
      avg_score: avgScore,
      acc_score: totalScore,
      total: totalFilms,
      latest: latestYear,
    };
  }
   
export function getListOf(list, prop) {
   return [...new Set(list.map((film) => film[prop] || ""))]; 

  } 
  return acc;

