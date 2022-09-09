import { Suspense, lazy } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import { sanityClient } from "../client";
import HeroPage from "./AllSections/HeroPage/HeroPage";
import { Post } from "../pages/AllSections/AboutMeSection/typings";

import NavBar from "../components/AtomicComponents/Navbar/NavBar";
import { Stats } from "@react-three/drei";
const AboutMe = lazy(
  () => import("../../portfolio/pages/AllSections/AboutMeSection/AboutMe")
);
const SkillSection = lazy(
  () => import("../../portfolio/pages/AllSections/SkillSection/SkillSection")
);
const ProjectSection = lazy(
  () => import("../pages/AllSections/ProjectSection/ProjectSection")
);
const ExprienceSection = lazy(
  () => import("../pages/AllSections/ExprienceSection/ExprienceSection")
);
import ContactForm from "../pages/AllSections/FormSection/FormSection";

interface Props {
  aboutSection: Post[];
  projectSection: Post[];
}

const Home: NextPage = ({ aboutSection, projectSection }: Props) => {
  return (
    <div>
      <Head>
        <title>Saeid Abedi</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1"
          crossOrigin="anonymous"
        /> */}
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
      <NavBar />
      <main>
        <Stats />

        <HeroPage />
        <AboutMe aboutSection={aboutSection} />
        <SkillSection />

        <ExprienceSection />

        <ProjectSection projectSection={projectSection} />

        <ContactForm />
      </main>
    </div>
  );
};

export const getServerSideProps = async () => {
  const postsQuery = `*[_type == "AboutMe"]{
  _id,
  title,
  body,
  mainImage
}
`;
  const projectQuery = `*[_type == "Projects"]{
  _id,
  title,
  body,
  mainImage,
  progressValue
}
`;
  const aboutSection = await sanityClient.fetch(postsQuery);
  const projectSection = await sanityClient.fetch(projectQuery);
  console.log("About me", aboutSection);
  console.log("project", projectSection);
  return {
    props: {
      aboutSection,
      projectSection,
    },
  };
};

export default Home;
