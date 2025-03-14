import Image from "next/image";

export default function Home() {
  //random
  let random = Math.floor(Math.random() * 100) + 1;
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <ol className="list-inside list-decimal text-sm/6 text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2 tracking-[-.01em]">
            We will fetch post data{" "}
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-[family-name:var(--font-geist-mono)] font-semibold">
              https://jsonplaceholder.typicode.com/posts/id
            </code>
            .
          </li>
          <li>
            We provide five ways to show the code and rendering method.
          </li>
          <li>
            CSR,SSG,SSG + ISR,SSR,SSR + ISR,SSR + SSG
          </li>
        </ol>
        <div className="flex justify-center py-4">
          <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-auto max-w-full w-full sm:w-[600px]">
            <code className="font-mono text-sm">
              {`+------------------------------------------------------------+------------------------+-----------------------------------------------------+----------------------------------------------------------------------------+-------------------------------------------------------------------------------------+--------------------------------------------------------+--------------------------------------------------------------------+
|                      Rendering Method                      | Static HTML Generation |             Where is Content Rendered?              |                                    SEO                                     |                                      Use Case                                       |                    Update Frequency                    |                            Performance                             |
+------------------------------------------------------------+------------------------+-----------------------------------------------------+----------------------------------------------------------------------------+-------------------------------------------------------------------------------------+--------------------------------------------------------+--------------------------------------------------------------------+
| CSR (Client-Side Rendering)                                | No                     | Client-side (browser)                               | Poor (can't be crawled easily by search engines)                           | Dynamic, interactive apps like chats, dashboards                                    | On-demand (user actions)                               | Fast after initial load, slower first load                         |
| SSG (Static Site Generation)                               | Yes                    | Server-side (build time)                            | Great (static pages are easy to crawl)                                     | Blogs, documentation, static sites                                                  | At build time                                          | Very fast, no server load after build                              |
| SSG + ISR (Incremental Static Regeneration)                | Yes                    | Server-side (build time, updates at set intervals)  | Great (pages are static but can be updated)                                | Sites with static content that need periodic updates (e.g., product pages)          | Every set interval (e.g., 60 sec)                      | Fast and always updated, minimal server load                       |
| SSR (Server-Side Rendering)                                | No                     | Server-side (every request)                         | Great (pages are generated on each request)                                | Dynamic content that changes often (e.g., news sites, user-specific content)        | On every request                                       | Slower initial load, higher server load                            |
| SSR + ISR (Server-Side Rendering + ISR)                    | No                     | Server-side (SSR first, then periodically updated)  | Great (initial content is generated for SEO, and updated at set intervals) | Sites that need both SEO and frequent updates                                       | Periodically (e.g., 60 sec)                            | Fast loading with periodic updates                                 |
| SSR + SSG (Server-Side Rendering + Static Site Generation) | Yes                    | Server-side (SSR for dynamic, SSG for static pages) | Excellent (mix of static and dynamic pages)                                | Sites with a mix of static and dynamic content (e.g., news sites with static pages) | On request for dynamic pages, at build time for static | Best of both worlds: fast static content and fresh dynamic content |
+------------------------------------------------------------+------------------------+-----------------------------------------------------+----------------------------------------------------------------------------+-------------------------------------------------------------------------------------+--------------------------------------------------------+--------------------------------------------------------------------+`}
            </code>
          </pre>
        </div>

        <div className="flex gap-2 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
            href={`/csr/${random}`}
            target="_blank"
          >
            CSR
          </a>
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
            href={`/ssg/${random}`}
            target="_blank"
          >
            SSG
          </a>
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
            href={`/ssgisr/${random}`}
            target="_blank"
          >
            SSG + ISR
          </a>
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
            href={`/ssr/${random}`}
            target="_blank"
          >
            SSR
          </a>
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
            href={`/ssrisr/${random}`}
            target="_blank"
          >
            SSR + ISR
          </a>
        </div>
      </main>
      {/* <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="midium"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://github.com/linyuhao8/nextjs-render-methods"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="render"
          target="_blank"
          rel="noopener noreferrer"
        >
          Go to Example →
        </a>
      </footer> */}
    </div>
  );
}
