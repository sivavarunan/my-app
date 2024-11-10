import SearchForm from "../components/SearchForm";

export default function Home() {
  return (
    <>
      <section className="pink_container">
        <h1 className="heading">Pitch your startup, <br/> Connect with enterprenuers</h1>
        <p className="sub-heading !max-w-3xl">
          Submut Ideas, Vote on Pitches, and Get Noticed in Virtual Competition
        </p>
        <SearchForm />
      </section>
    </>
  )
}


