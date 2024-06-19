"use client"

import EditPrompt from "@/components/EditPrompt";

export default function Home() {
  return (
    <main >
      <div className="absolute inset-0 flex justify-center items-center">
        <p className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 text-5xl font-extrabold">
          Website Content Placeholder
        </p>
        <EditPrompt />
      </div>

    </main>
  );
}