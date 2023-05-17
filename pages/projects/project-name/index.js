// Import the required modules
import { useRouter } from "next/router";

// Define the dynamic page component
const DynamicPage = () => {
  // Retrieve the user input from the URL
  const router = useRouter();
  const { input } = router.query;

  // Generate the page name based on the input
  const pageName = `${input}`;

  return (
    <div>
      <h1>{pageName}</h1>
      <p>This is a dynamic page that changes based on user input.</p>
    </div>
  );
};

export default DynamicPage;
