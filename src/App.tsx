import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import DemoOne from "@/components/ui/demo";
import { PathDrawingLoader } from "@/components/PathDrawingLoader";

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <main className="w-full h-screen bg-[#050505] text-white overflow-hidden relative">
      <AnimatePresence>
        {loading && (
          <PathDrawingLoader
            durationSec={3.2}
            onComplete={() => setLoading(false)}
          />
        )}
      </AnimatePresence>

      <div className="w-full h-full">
        <DemoOne />
      </div>
    </main>
  );
}
