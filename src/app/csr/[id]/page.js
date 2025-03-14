//Dynamic content rendering based on user interaction.
//Great for applications that require a lot of interactivity or real-time updates.
//Content rendered on the client side.
//Initial load may be slower, but interactivity is fast once JavaScript is loaded.
//Not as SEO-friendly as server-side rendering (SSR) because search engines may not index the content.

"use client"; // Marks this as a client-side component (CSR)

import React, { useEffect, useState } from "react";

const Page = ({ params }) => {
  const [post, setPost] = useState({}); // State to store post data
  const [loading, setLoading] = useState(true); // State to manage loading state
  const { id } = React.use(params); // Destructuring to extract the `id` from params

  useEffect(() => {
    // Client-side fetch API data when the component mounts or when `id` changes
    const fetchPost = async () => {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}`
      );
      const data = await response.json(); // Parse the JSON data from the API response
      setPost(data); // Update state with the fetched post data
      setLoading(false); // Set loading to false after the data is fetched
    };

    fetchPost(); // Call the fetch function to load the post data
  }, [id]); // Dependency array to ensure fetching happens when `id` changes

  if (loading) {
    // Display a loading message while waiting for the data to be fetched
    return <div>Loading...</div>;
  }

  // Once data is fetched, render the post's title, body, and ID
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
};

export default Page;
