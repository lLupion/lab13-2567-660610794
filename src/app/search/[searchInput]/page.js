"use client";
import MovieRow from "@components/MovieRow";
import { movieDB } from "@lib/movieDB";
import { useParams } from "next/navigation";


export default function SearchResultPage() {
  const params = useParams();
  const  searchInput  = params.searchInput;

  //tip1 : before filtering movie, replace all "%20" with " " (space) in the input
  // const processedSearchInput = ...

  /*
  tip2 : Use "includes" string method to check substring
  Example : "ABC".includes("AB") -> return true

  tip3 : To implement case insensitive searching, use "toLocaleLowerCase" string method
  to convert movie title and searchInput to lower case 
  const filteredMovies = movieDB.filter((movie) =>
    you code here...
  );
  */
  const processedSearchInput = searchInput ? String(searchInput).replace(/%20/g, " ") : "";
  const filteredMovies = movieDB.filter((movie) =>
  movie.title.toLocaleLowerCase().includes(processedSearchInput.toLocaleLowerCase())
);

  return (
    <div>
      <p className="fw-bold fs-4 text-center my-0">
        Searching &quot; {processedSearchInput} &quot;
      </p>
      <p className="fw-bold fs-4 text-center">Found {filteredMovies.length} result(s)</p>
      {/* Use  "filteredMovies" variable to map-loop rendering MovieRow component */}
   {   filteredMovies.map((moviee, i) => (
    <MovieRow 
    key = {moviee.id}
    id={moviee.id}
    title={moviee.title}
    rating={moviee.rating}
    number={i+1}
    ></MovieRow>
   ))}
    </div>
  );
}