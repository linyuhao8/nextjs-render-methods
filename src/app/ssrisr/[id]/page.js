// This sets the revalidation time to 60 seconds
// It means that the page will be server-side rendered (SSR) on the first request,
// But with revalidation, it doesn't get the data on every request. Instead, it uses a static caching mechanism (the old HTML is given within 60 seconds), or waits until the user asks for it and will give the old one before requesting the new one.
export const revalidate = 60;

export default async function Page({ params }) {
  // http://localhost:3000/5
  const { id } = await params; // Extract the dynamic parameter (id) from the URL
  console.log(id);

  // Fetch the post data from an API
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const post = await res.json();
  console.log(post);

  // If the fetch request fails, throw an error
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
