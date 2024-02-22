import CardMovie from "@/components/CardMovie";
import HomeDefaultStream from "@/components/HomeDefaultStream";
import HomeSectionListStream from "@/components/HomeSectionListStream";

const movies = [
  {
    thumbnail: "/sample/images/movie0.png",
    title: "Movie title 1"
  },
  {
    thumbnail: "/sample/images/movie1.png",
    title: "Movie title 2"
  },
  {
    thumbnail: "/sample/images/movie2.png",
    title: "Movie title 3"
  },
  {
    thumbnail: "/sample/images/movie3.png",
    title: "Movie title 4"
  },
  {
    thumbnail: "/sample/images/movie4.png",
    title: "Movie title 5"
  },
  {
    thumbnail: "/sample/images/movie5.png",
    title: "Movie title 6"
  },
];

const movies2 = [
  {
    thumbnail: "/sample/images/movie6.png",
    title: "Movie title 7"
  },
  {
    thumbnail: "/sample/images/movie7.png",
    title: "Movie title 8"
  },
  {
    thumbnail: "/sample/images/movie8.png",
    title: "Movie title 9"
  },
  {
    thumbnail: "/sample/images/movie9.png",
    title: "Movie title 10"
  },
  {
    thumbnail: "/sample/images/movie10.png",
    title: "Movie title 11"
  },
  {
    thumbnail: "/sample/images/movie11.png",
    title: "Movie title 12"
  },
];

export default function Home() {
  return (
    <div className="min-h-screen home-page">
      <div className="relative py-[78px] z-[1]">
        <HomeDefaultStream />
        <div className="flex flex-col gap-[35px] mt-[85px]">
          <HomeSectionListStream title="Baru di Tonton">
            <div className="flex gap-[14px] xl:gap-[20px]">
              {movies.map((ab: any, cd: number) => {
                return <CardMovie data={ab} key={cd} />
              })}
            </div>
          </HomeSectionListStream>
          <HomeSectionListStream title="Terpopuler">
            <div className="flex gap-[14px] xl:gap-[20px]">
              {movies2.map((ab: any, cd: number) => {
                return <CardMovie data={ab} key={cd} />
              })}
            </div>
          </HomeSectionListStream>
        </div>
      </div>
    </div>
  );
}
