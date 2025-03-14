// Generate static pages for all posts (during build)
// It will return the old static page until you redeploy the site or manually update the page.
// `generateStaticParams()` runs during the build phase and fetches all the post IDs from the API.
// It tells Next.js which dynamic paths to pre-render as static pages.
// These static pages will be generated during the build phase.
// When a user requests a dynamic page (e.g., /posts/5), Next.js will return the corresponding HTML, 
// which was pre-generated during the build phase.

export async function generateStaticParams() {
    // Fetch the list of all posts from the API
    const posts = await fetch("https://jsonplaceholder.typicode.com/posts").then(
      (res) => res.json()
    );
    
    // Return the `id` of each post to tell Next.js to generate a static page for each `id`
    // These static pages will be generated in the build phase.
    return posts.map((post) => ({
      id: String(post.id), // Generate a static page for each post
    }));
  }
  
  export default async function Page({ params }) {
    // http://localhost:3000/5 - This is a dynamic URL
    const { id } = await params;
    console.log(id);
  
    // Fetch the post data based on the `id`
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const post = await res.json();
    console.log(post);
  
    // Handle errors if the response is not successful
    if (!res.ok) {
      throw new Error(`Failed to fetch data: ${res.statusText}`);
    }
  
    // If no post data is returned, return a 404 error
    if (post.length === 0) {
      return {
        status: 404,
        error: new Error("Not Found"),
      };
    }
  
    // Render the post's title and content
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
  