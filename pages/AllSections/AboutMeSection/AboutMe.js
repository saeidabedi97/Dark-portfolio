import { PortableText } from "@portabletext/react";
import Image from "next/image";
import {
  Heading2,
  Heading3,
  PMedium,
} from "../../../components/AtomicComponents/Text/Text";
// import { Post } from "./typings";
import imageUrlBuilder from "@sanity/image-url";
import { urlFor } from "../../../client";
import { MyContainer } from "../../../components/AtomicComponents/Container/Container";
import s from "../AboutMeSection/AboutMe.module.scss";
import { useState } from "react";

// interface Props {
//   posts: Post[];
// }

export default function AboutMe({ posts }) {
  // console.log(posts[0].body[0].children[0].text);

  const [text, setText] = useState(posts[0].body[0].children[0].text);
  const textArray = text.split(".");
  console.log(textArray);

  return (
    <section className={s.aboutMe__section}>
      {posts &&
        posts.map((post, index) => (
          <div key={index} className={s.aboutMe__container}>
            <Heading2 className={s.aboutMe__title}>{post.title}</Heading2>
            <div className={s.aboutMe__content}>
              <div className={s.aboutMe__imgContainer}>
                <Image
                  src={urlFor(post.mainImage).url()}
                  alt="my picture"
                  layout={"responsive"}
                  className={s.aboutMe__img}
                  width={2898}
                  height={4096}
                />
              </div>
              <div className={s.aboutMe__txtContainer}>
                <PMedium>{textArray[0]}.</PMedium>
                <PMedium>{textArray[1]}.</PMedium>
                <PMedium>{textArray[2]}.</PMedium>
                <PMedium>{textArray[3]}.</PMedium>
              </div>
            </div>
          </div>
        ))}
    </section>
  );
}
