import SearchForm from "../../components/SearchForm";
import StartupCard, { StartupTypeCard } from "@/components/StartupCard";
import { STARTUPS_QUERY } from "@/sanity/lib/queries";
import { sanityFetch, SanityLive } from "@/sanity/lib/live";
import { auth } from "../auth";


export default async function Home({ searchParams }: {
  searchParams: Promise<{ query?: string }>
}) {

  const query = (await searchParams).query;
  const params = {search: query || null};

  const session = await auth();
  console.log(session?.id);

  const { data: posts } = await sanityFetch({ query: STARTUPS_QUERY, params })

  return (
    <>
      <section className="pink_container">
        <h1 className="heading">Insights & Inspirations: <br /> Your Go-To Blog for Ideas</h1>
        <p className="sub-heading !max-w-3xl">
        Explore a diverse range of topics, from technology and lifestyle to travel and personal development. Get inspired and stay informed with our engaging articles crafted for curious minds.
        </p>
        <SearchForm query={query} />
      </section>
      <section className="section_container">
        <p className="text-30-semibold">
          {query ? `"Search results for ${query}"` : 'All Blogs'}
        </p>
        <ul className="mt-7 card_grid">
          {posts?.length > 0 ? (
            posts.map((post: StartupTypeCard) => (
              <StartupCard key={post?._id} post={post} />
            ))
          ) : (
            <p className="no-results">No Blogs found</p>
          )}
        </ul>
      </section>

      <SanityLive/>
    </>
  )
}