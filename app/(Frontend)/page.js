import About from "../Components/About/About";
import Banner from "../Components/Banner/Banner";
import LatestBlog from "../Components/Blog/LatestBlog";
import Contact from "../Components/Contact/Contact";
import Education from "../Components/Education/Education";
import Projects from "../Components/projects/Projects";
import Testimonial from "../Components/testimonial/testimonial";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Banner></Banner>
      <About></About>
      <Education></Education>
      <Projects></Projects>
      <Testimonial></Testimonial>
      <LatestBlog></LatestBlog>
      <Contact></Contact>
  
    </div>
  );
}
