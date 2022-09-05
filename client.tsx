import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

// export const config = {
//   projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,

//   dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
//   apiVersion: "2021-10-21",

//   useCdn: process.env.NODE_ENV == "production",
// };

export const sanityClient = createClient({
  projectId: "1ks8y5qd",
  dataset: "production",
  apiVersion: "2021-10-21", // use a UTC date string
  useCdn: true, // `false` if you want to ensure fresh data
});

export const urlFor = (source: SanityImageSource) =>
  imageUrlBuilder(config).image(source);
