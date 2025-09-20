// Sanity configuration with fallbacks for client deployments

export const sanityConfig = {
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID || "08fgj36d", // Fallback to demo project
  dataset: import.meta.env.VITE_SANITY_DATASET || "production",
  apiVersion: import.meta.env.VITE_SANITY_API_VERSION || "2023-09-20",
  useCdn: import.meta.env.PROD ? true : false, // Use CDN in production for better performance
};

// Check if client has configured their Sanity project
export const isClientConfigured = () => {
  const projectId = import.meta.env.VITE_SANITY_PROJECT_ID;
  const isConfigured = !!(
    projectId &&
    projectId !== "your_project_id_here" &&
    projectId !== "08fgj36d"
  );
  console.log("🔍 Configuration check:", { projectId, isConfigured });
  return isConfigured;
};

// Get configuration status for debugging
export const getConfigStatus = () => {
  return {
    projectId: sanityConfig.projectId,
    isConfigured: isClientConfigured(),
    isProduction: import.meta.env.PROD,
    environment: import.meta.env.MODE,
  };
};
