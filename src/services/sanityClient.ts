import sanityClient from "@sanity/client";

export const client = sanityClient({
  projectId: "08fgj36d", // your project ID
  dataset: "production",
  apiVersion: "2025-09-02", // use current date
  useCdn: true, // set to false if you want freshest content
});
