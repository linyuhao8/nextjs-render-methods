// Revalidate the page every 60 seconds
// This means the static HTML generated will be cached for 60 seconds.
// After 60 seconds, Next.js will regenerate the page when a new request comes in(in catch).
// This ensures that the page content stays fresh while still leveraging static caching.
export const revalidate = 60;

// Define the dynamic paths that need to be pre-rendered.
// In this case, we are fetching a list of posts and generating static pages for each post.
export async function generateStaticParams() {
  // Fetch all posts from the API
  const posts = await fetch("https://jsonplaceholder.typicode.com/posts").then(
    (res) => res.json()
  );

  // Return an array of params containing the `id` of each post.
  // This tells Next.js to generate a static page for each post with its unique `id`.
  return posts.map((post) => ({
    id: String(post.id), // Convert `id` to string to match Next.js dynamic route requirements
  }));
}

// Page component responsible for fetching data for a specific post.
// This uses SSR (Server-Side Rendering) for the first request and ISR (Incremental Static Regeneration)
// for subsequent requests after the page is cached and revalidated.
export default async function Page({ params }) {
  // Extract `id` from the dynamic URL parameter
  const { id } = await params;
  console.log(id);

  // Fetch the post data using the `id`
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const post = await res.json();
  console.log(post);

  // Check if the response is valid (status 200)
  if (!res.ok) {
    throw new Error(`Failed to fetch data: ${res.statusText}`);
  }

  // If no post data is returned (empty response), return a 404 error
  if (post.length === 0) {
    return {
      status: 404,
      error: new Error("Not Found"),
    };
  }

  // Render the post's title, id, and body in a structured layout
  return (
    <main className="flex w-full h-screen bg-gray-100 items-start justify-center">
      <div className="flex flex-col items-start justify-start h-screen max-w-[600px] p-4">
        <h1 className="text-3xl">{post.title}</h1>
        <button className="bg-gray-500 px-5 rounded-lg text-xl mt-2 mb-3 text-white">
          {post.id}
        </button>
        <p>{post.body}</p>
      </div>
    </main>
  );
}
