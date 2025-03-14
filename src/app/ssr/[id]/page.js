// No static files generated
// Each request results in HTML being generated on the server
// Good for SEO because search engines get fully rendered HTML content
// But, since the server has to generate HTML on every request, it can put a heavier load on the server

export default async function Page({ params }) {
    // http://localhost:3000/5
    const { id } = await params; // Extract the dynamic parameter (id)
    console.log(id);
    
    // Fetch the post data from an API
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const post = await res.json();
    console.log(post);
    
    // If the fetch request is not successful, throw an error
    if (!res.ok) {
      throw new Error(`Failed to fetch data: ${res.statusText}`);
    }
  
    // If no post data is found, return a 404 error
    if (post.length === 0) {
      return {
        status: 404,
        error: new Error("Not Found"),
      };
    }
  
    // Return the page content once the data is fetched
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
  