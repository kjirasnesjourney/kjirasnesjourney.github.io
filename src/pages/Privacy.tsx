import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArticleContent } from "@/components/ArticleComponents";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="box-content max-w-[80rem] px-6 md:px-[calc(18vw-10rem)] mx-auto mt-[4rem] mb-[8rem]">
        <header className="mb-[4rem] text-center">
          <h1 className="text-[3.4rem] md:text-[4.2rem] lg:text-[5rem] font-semibold tracking-[-0.01em] leading-[1.2] mb-[1rem]">
            Credits & Disclaimers
          </h1>
        </header>

        <ArticleContent>
          <h2>No Data Collection</h2>
          <p>
            This site does not collect, store, or share any personal data. There are no accounts,
            no login systems, no analytics tracking, and no cookies beyond what your browser
            handles locally (such as your theme preference).
          </p>

          <h2>Copyright Disclaimer</h2>
          <p>
            All Super Nintendo game titles, box art, characters, and related assets are the
            intellectual property of their respective owners (Nintendo, and third-party publishers).
            This site is a personal, non-commercial fan project and is not affiliated with,
            endorsed by, or sponsored by Nintendo or any game publisher.
          </p>
          <p>
            No copyright infringement is intended. All opinions expressed are personal and do not
            represent any company or organization.
          </p>

          <h2>Emulation Disclaimer</h2>
          <p>
            Games featured on this site are played via emulation for personal, non-commercial
            purposes. This project does not distribute, sell, or promote ROM files or any
            copyrighted software. Emulation is used solely as a means of personal preservation
            and appreciation of classic gaming history.
          </p>

          <h2>Credits</h2>

          <h3>Character Art</h3>
          <p>
            Kjira character art by <strong>@fyichi</strong>.
          </p>

          <h3>Music</h3>
          <p>
            Intro track edited from OCRemix:<br />
            OC ReMix #3277: Chrono Trigger 'stratification' [Corridor of Time] by melody<br />
            <a href="http://ocremix.org/remix/OCR03277" target="_blank" rel="noopener noreferrer">
              http://ocremix.org/remix/OCR03277
            </a>
          </p>
          <p>
            OCRemix content is free for non-commercial use under the terms of the OCRemix
            content policy.
          </p>
        </ArticleContent>
      </div>

      <Footer />
    </div>
  );
};

export default Privacy;
