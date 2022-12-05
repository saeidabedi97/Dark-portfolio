import { Suspense, lazy } from "react";
import { motion, useScroll } from "framer-motion";
import LazyLoad from "react-lazyload";
import type { NextPage } from "next";
import Head from "next/head";
import { sanityClient } from "../client";
import { Post } from "../pages/AllSections/AboutMeSection/typings";

const HeroPage = lazy(() => import("../pages/AllSections/HeroPage/HeroPage"));
const AboutMe = lazy(() => import("./AllSections/AboutMeSection/AboutMe"));
const SkillSection = lazy(
  () => import("../pages/AllSections/SkillSection/SkillSection")
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

const Loading = () => {
  return (
    <h1 style={{ fontSize: "105px", color: "white", zIndex: 100 }}>
      Loading...
    </h1>
  );
};

const Home: NextPage = ({ aboutSection, projectSection }: Props) => {
  const { scrollYProgress } = useScroll();

  return (
    <div>
      <Head>
        <title>Saeid Abedi</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main>
        {/* Scroll progress bar*/}
        <motion.div
          style={{
            scaleX: scrollYProgress,
            background: "white",
            height: "10px",
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            transformOrigin: "0%",
            zIndex: 200,
          }}
        ></motion.div>
        {/* Scroll progress bar*/}
        <Suspense fallback={<Loading />}>
          <HeroPage />
          <AboutMe aboutSection={aboutSection} />
          <SkillSection />
          <ExprienceSection />
          <ProjectSection projectSection={projectSection} />
          <ContactForm />
        </Suspense>
      </main>
    </div>
  );
};

export const getStaticProps = async () => {
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

  return {
    props: {
      aboutSection,
      projectSection,
    },
  };
};

export default Home;
