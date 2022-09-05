import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { sanityClient, urlFor } from "../client";
import Link from "next/link";
import HeroPage from "./AllSections/HeroPage/HeroPage";
import { Post } from "../pages/AllSections/AboutMeSection/typings";
import AboutMe from "./AllSections/AboutMeSection/AboutMe";
interface Props {
  posts: Post[];
}

const Home: NextPage = ({ posts }: Props) => {
  return (
    <div style={{ minHeight: "100vh", minWidth: "100vw" }}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1"
          crossOrigin="anonymous"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@900&display=swap"
          rel="stylesheet"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <HeroPage posts={posts} />
      </div>
    </div>
  );
};

export const getServerSideProps = async () => {
  const query = `*[_type == "post"]{
  _id,
  title,
  body,
  mainImage
}
`;
  const posts = await sanityClient.fetch(query);
  console.log("posts", posts);
  return {
    props: {
      posts,
    },
  };
};

export default Home;
