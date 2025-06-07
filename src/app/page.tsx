import Image from "next/image";
import Header from "./components/Header";
import TabBox from "./components/TabBox";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-dark flex flex-col justify-between">
      <Header />
      <div className="p-8">
        <main className="max-w-4xl mx-auto flex flex-col items-center">
          <div className="relative w-48 h-48 mb-6">
            <Image
              src="/profilepicture.jpg"
              alt="Profile"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="rounded-lg border-4 border-neon-purple shadow-neon"
              style={{ objectFit: "cover" }}
            />
          </div>
          <h1 className="font-cyber text-4xl font-bold text-neon-purple mb-4 tracking-wider">
            Maflyne
          </h1>
          <div className="w-full h-px bg-gradient-to-r from-transparent via-neon-purple to-transparent my-8" />
          <TabBox />
        </main>
      </div>
      <Footer />
    </div>
  );
}
