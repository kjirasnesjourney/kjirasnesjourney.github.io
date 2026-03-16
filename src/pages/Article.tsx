import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArticleRelatedItems } from "@/components/ArticleRelatedItems";
import { games } from "@/data/games";

// 1–5 star score display
function ScoreStars({ score }: { score: number }) {
  return (
    <div className="flex items-center gap-1" aria-label={`Score: ${score} out of 5`}>
      {[1, 2, 3, 4, 5].map((n) => (
        <svg
          key={n}
          className={`w-8 h-8 ${n <= score ? "text-[#FE2C55]" : "text-muted-foreground opacity-30"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
      <span className="ml-2 text-[1.6rem] text-muted-foreground">{score} / 5</span>
    </div>
  );
}

const Article = () => {
  const { slug } = useParams<{ slug: string }>();
  const game = games.find((g) => g.slug === slug);

  // Related: same category, excluding current
  const related = game
    ? games.filter((g) => g.category === game.category && g.slug !== game.slug).slice(0, 3)
    : [];

  if (!game) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="flex flex-col items-center justify-center py-40 text-center">
          <p className="text-[2rem] text-muted-foreground">Game not found.</p>
          <Link to="/" className="mt-6 text-primary underline text-[1.6rem]">Back to all games</Link>
        </div>
        <Footer />
      </div>
    );
  }

  const hasReview = !!game.review;

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <article className="flex flex-col">

        {/* Game Header */}
        <header className="box-content max-w-[138rem] px-4 md:px-[calc(18vw-10rem)] mx-auto flex flex-col items-center mt-[4.5rem] xl:mt-[6rem] text-center">
          <span className="text-primary uppercase tracking-widest text-[1.4rem] font-semibold mb-4">
            {game.category}
          </span>
          <h1 className="inline-block max-w-[90rem] mt-0 mb-[1rem] text-[3.4rem] md:text-[4.2rem] lg:text-[6rem] font-semibold tracking-[-0.01em] leading-[1.2] md:leading-[1]">
            {game.title}
          </h1>

          {/* Meta row */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-[1.5rem] text-muted-foreground mt-2 mb-6">
            {game.year && <span>{game.year}</span>}
            {game.developer && <span>{game.developer}</span>}
            {game.publisher && game.publisher !== game.developer && <span>{game.publisher}</span>}
          </div>

          {/* Score */}
          {game.score && (
            <div className="mb-8">
              <ScoreStars score={game.score} />
            </div>
          )}
        </header>

        {/* Box Art Hero */}
        <figure className="relative flex overflow-hidden w-full mt-[3rem] md:mt-[4.5rem] lg:mt-[6rem] justify-center bg-muted/30">
          <img
            src={game.image}
            alt={`${game.title} box art`}
            loading="lazy"
            className="max-h-[60vh] w-auto object-contain"
          />
        </figure>

        {/* Review Body */}
        <div className="box-content max-w-[64rem] px-4 md:px-[calc(18vw-10rem)] mx-auto mt-[4rem] md:mt-[6rem] lg:mt-[8rem] mb-[6rem]">
          {hasReview ? (
            <div
              className="
                text-[1.8rem] leading-[1.8]
                [&_h2]:mt-[1.666em] [&_h2]:mb-[0.666em] [&_h2]:text-[2.4rem] [&_h2]:font-semibold
                [&_p]:mb-[2rem]
                [&_blockquote]:border-l-4 [&_blockquote]:border-primary [&_blockquote]:pl-6 [&_blockquote]:italic [&_blockquote]:my-8
              "
              dangerouslySetInnerHTML={{ __html: game.review! }}
            />
          ) : (
            <div className="flex flex-col items-center text-center py-20 gap-4">
              <span className="text-[4rem]">🕹️</span>
              <p className="text-[2rem] font-semibold">Review coming soon</p>
              <p className="text-[1.6rem] text-muted-foreground max-w-[40rem]">
                I've played this one but haven't written my thoughts yet. Check back later.
              </p>
              <Link
                to="/"
                className="mt-4 text-[1.6rem] text-primary underline underline-offset-4"
              >
                Browse all games
              </Link>
            </div>
          )}
        </div>
      </article>

      {/* Related Games */}
      {related.length > 0 && (
        <section>
          <div className="box-content max-w-[138rem] px-4 md:px-[calc(18vw-10rem)] mx-auto mb-4">
            <h2 className="text-[1.6rem] font-semibold uppercase tracking-[0.2rem] border-b border-border pb-4">
              More {game.category} games
            </h2>
          </div>
          <ArticleRelatedItems
            items={related.map((g) => ({
              title: g.title,
              slug: g.slug,
              image: g.image,
              description: g.teaser || "My thoughts on this SNES game.",
              tag: g.category,
            }))}
          />
        </section>
      )}

      <Footer />
    </div>
  );
};

export default Article;
