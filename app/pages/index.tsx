import Layout from "app/layouts/Layout"
import { BlitzPage } from "blitz"

const Home: BlitzPage = () => {
  return (
    <>
      <div
        style={{
          background: "#0000ee",
          display: "flex",
          height: "100vh",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h1 style={{ color: "white", fontSize: "6rem" }}>We are under Updation</h1>
      </div>
    </>
  )
}

Home.getLayout = (page) => <Layout title="Home">{page}</Layout>

export default Home
