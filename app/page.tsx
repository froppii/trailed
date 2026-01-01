"use client";
import dynamic from "next/dynamic";
import { useState } from "react";
import Leftbar from "@/components/Leftbar";

const Map = dynamic(() => import("@/components/Map"), { ssr: false });

export default function Home() {
  const [selectedTrail, setSelectedTrail] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div>
      <Map onSelectTrail={setSelectedTrail} />
      <Leftbar
        open={sidebarOpen}
        selected={selectedTrail}
        onClose={() => setSidebarOpen(false)}
      />

      <button
        className="absolute bottom-6 right-6 bg-green-600 text-white px-4 py-3 rounded-full shadow-xl"
        onClick={() => setSidebarOpen(true)}
      >
        Trails
      </button>
    </div>
  )

}
