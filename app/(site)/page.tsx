import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Services } from "@/components/sections/services";
import { FeaturedCollections } from "@/components/sections/featured-collections";
import { Projects } from "@/components/sections/projects";
import { WhyChooseUs } from "@/components/sections/why-choose-us";
import { Testimonials } from "@/components/sections/testimonials";
import { Cta } from "@/components/sections/cta";
import { Contact } from "@/components/sections/contact";
import { getHeroSlides } from "@/lib/sanity/fetch";

export default async function Home() {
  const heroSlides = await getHeroSlides();

  return (
    <>
      <Hero slides={heroSlides} />
      <About />
      <Services />
      <FeaturedCollections />
      <Projects />
      <WhyChooseUs />
      <Testimonials />
      <Cta />
      <Contact />
    </>
  );
}
