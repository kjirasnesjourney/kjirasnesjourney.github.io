import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import AppearOnScroll from "@/components/AppearOnScroll";
import logo from "@/assets/logo.png";
import persona from "@/assets/Extra long hair.png";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero — logo left, persona right */}
      <AppearOnScroll delay={0}>
        <figure className="relative flex overflow-hidden w-full mt-[3rem] md:mt-[4.5rem] lg:mt-[6rem] mb-[6rem] md:mb-[9rem] lg:mb-[12rem] items-end justify-center gap-8 px-6">
          <img
            src={logo}
            alt="Kjira's SNES Journey"
            className="h-[180px] md:h-[240px] w-auto object-contain"
          />
          <img
            src={persona}
            alt="Kjira"
            className="h-[220px] md:h-[300px] w-auto object-contain"
          />
        </figure>
      </AppearOnScroll>

      {/* Story Section */}
      <div className="box-content max-w-[64rem] px-4 md:px-[calc(18vw-10rem)] mx-auto relative mb-[6rem] md:mb-[9rem] lg:mb-[12rem]">
        <AppearOnScroll delay={0}>
          <h2 className="text-[2.7rem] md:text-[3.6rem] font-semibold mb-[3rem]">
            About the Project
          </h2>
        </AppearOnScroll>
        <AppearOnScroll delay={150}>
          <p className="text-[1.8rem] leading-[1.8] text-foreground">
            A personal journey to play (and sometimes finish) every Super Nintendo game.
          </p>
        </AppearOnScroll>
      </div>

      {/* Mission Quote */}
      <div className="box-content max-w-[64rem] px-4 md:px-[calc(18vw-10rem)] mx-auto relative mb-[6rem] md:mb-[9rem] lg:mb-[12rem]">
        <AppearOnScroll delay={0}>
          <figure className="blockquote-big text-center mt-[1.25rem] mb-[0.9375rem] md:mt-[1.875rem] md:mb-[1.875rem] lg:mt-[3.75rem] lg:mb-[3.75rem] md:mx-[calc(-18vw+6.875rem)] xl:mx-[-12.5rem]">
            <blockquote className="font-sans text-[calc(5vw+0.6rem)] lg:text-[5.4rem] font-extrabold leading-[1.2]">
              "A journey through 1749 games, a lifetime of memories."
            </blockquote>
            <figcaption className="text-[calc(2.5vw+0.8rem)] lg:text-[3rem] font-semibold leading-[1.6] md:leading-[1.4] before:content-['―_']">
              Kjira
            </figcaption>
          </figure>
        </AppearOnScroll>
      </div>

      <Footer />
    </div>
  );
};

export default About;
