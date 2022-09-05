import { PortableText } from "@portabletext/react";
import Image from "next/image";
import {
  Heading2,
  Heading3,
  PMedium,
} from "../../../components/AtomicComponents/Text/Text";
import { Post } from "./typings";
import imageUrlBuilder from "@sanity/image-url";
import { urlFor } from "../../../client";
import { MyContainer } from "../../../components/AtomicComponents/Container/Container";
import s from "../AboutMeSection/AboutMe.module.css";

interface Props {
  posts: Post[];
}

export default function AboutMe({ posts }: Props) {
  console.log(posts);

  return (
    <div>
      {posts.map((post, index) => (
        <div key={index} className={s.aboutMeContainer}>
          <div className={s.aboutMeFigureSection}>
            <Heading2 className={s.sectionTitle}>{post.title}</Heading2>
            <MyContainer className={s.imageContainer}>
              <Image
                src={urlFor(post.mainImage).url()!}
                alt="my picture"
                width={"2898px"}
                height={"4096px"}
                layout={"responsive"}
              />
            </MyContainer>
          </div>
          <div className={s.aboutMeDetails}>
            <PMedium>{JSON.stringify(post.body)}</PMedium>
          </div>
        </div>
      ))}
    </div>
  );
}
