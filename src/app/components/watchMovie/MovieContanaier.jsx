import MovieCard from "../MovieCard"
export default function MovieContanaier({mediaType,data}) {
  return (
   <section className="section-full-screen p-3 flex justify-center bg-zinc-900 
    ">
      <div className="max-w-[1024px]  h-fit  grid  gap-3
        grid-cols-1
        sm:grid-cols-2
        md:grid-cols-3
        lg:grid-cols-4
        xl:grid-cols-5
      ">
        {data.results?.map(el=> <MovieCard info={el} mediaType={mediaType}/> )}
        </div>

    </section>
  )
}
