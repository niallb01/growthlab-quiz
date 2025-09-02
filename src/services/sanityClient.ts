// import sanityClient from "@sanity/client";
import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: "08fgj36d", // your project ID
  dataset: "production",
  apiVersion: "2025-09-02", // use current date
  useCdn: true, // set to false if you want freshest content
});
