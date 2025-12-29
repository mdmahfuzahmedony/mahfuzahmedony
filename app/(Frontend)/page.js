import About from "../Components/About/About";
import Banner from "../Components/Banner/Banner";
import Contact from "../Components/Contact/Contact";
import Education from "../Components/Education/Education";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Banner></Banner>
      <About></About>
      <Education></Education>
      <Contact></Contact>
  
    </div>
  );
}
