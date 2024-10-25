import Navbar from "./components/Navbar";
import Sec2 from "./components/Section2/Sec2";
import Sec1 from "./components/Section1/Sec1";
import Sec3 from "./components/Section3/Sec3";

export default function Home() {
  return (
    <div
      className="min-h-screen min-w-full bg-white relative"
      style={{
        backgroundImage: `url('/BG Vector.png')`, // Ensure this file is in your public folder
        backgroundSize: "cover", // Cover the full area
        backgroundPosition: "center", // Center the image
      }}
    >
      <div className="min-h-screen">
        <Navbar />
        <div className="p-2 lg:p-10 md:flex flex-col justify-center md:flex-row min-w-full md:justify-evenly">
          <div>
            <Sec1 />
          </div>
          <div>
            <Sec2 />
          </div>
          <div>
            <Sec3 />
          </div>
        </div>
      </div>
    </div>
  );
}
