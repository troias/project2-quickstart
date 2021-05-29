import Head from "next/head";
import fetch from "node-fetch";
import Link from "next/link";
import Posts from '../components/Posts'
import post from "../posts.json"

const Home = () => {
  return (
    <div>
      <Posts posts={post} />

      <div>Home page lad</div>
    </div>
  )
}

export default Home
