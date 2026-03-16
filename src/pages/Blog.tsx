import { useEffect, useRef, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import ArticlePreview from "@/components/ArticlePreview";
import BlogHighlight from "@/components/BlogHighlight";
import { games, categories } from "@/data/games";

const Blog = () => {
  const articlesRef = useRef<(HTMLElement | null)[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fadeInUp");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    articlesRef.current.forEach((article) => {
      if (article) observer.observe(article);
    });
    return () => observer.disconnect();
  }, [selectedCategory]);

  const featuredGame = games[games.length - 1]; // most recently added = featured
  const recentGames = games.slice(-4, -1).reverse(); // 3 before featured
  const filteredGames = selectedCategory === "All"
    ? games
    : games.filter((g) => g.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Featured Game */}
      <Section>
        <BlogHighlight
          title={featuredGame.title}
          description={featuredGame.teaser || "My thoughts on this SNES classic."}
          href={`/article/${featuredGame.slug}`}
          imageSrc={featuredGame.image}
          imageAlt={featuredGame.title}
        />
      </Section>

      {/* Recent Games */}
      <Section>
        <div className="grid w-full gap-x-16 gap-y-24 py-8 sm:grid-cols-2 lg:grid-cols-3">
          {recentGames.map((game, index) => (
            <div
              key={game.id}
              ref={(el) => (articlesRef.current[index] = el)}
              className="blog-feed__item"
              style={{ animationDelay: `${(index % 3) * 150}ms` }}
            >
              <ArticlePreview
                title={game.title}
                slug={game.slug}
                image={game.image}
                imageAlt={game.title}
                category={game.category}
                categorySlug={game.category.toLowerCase()}
                teaser={game.teaser || "My thoughts on this SNES game."}
              />
            </div>
          ))}
        </div>
      </Section>

      {/* All Games Grid */}
      <Section>
        <h2
          className="text-[hsl(var(--editorial-text))]"
          style={{
            width: "100%",
            marginBottom: "3rem",
            padding: "1rem 0",
            textAlign: "left",
            letterSpacing: "0.2rem",
            textTransform: "uppercase",
            borderBottom: "1px solid rgba(0,0,0,0.2)",
            fontSize: "1.6rem",
            fontWeight: 600,
            lineHeight: 1.5,
          }}
        >
          All Games Played
        </h2>

        {/* Category Filter Bar */}
        <div
          className="flex gap-4 mb-8 flex-wrap bg-background py-4 justify-center w-screen"
          style={{
            position: "sticky",
            top: "144px",
            zIndex: 10,
            marginLeft: "calc(-50vw + 50%)",
            marginRight: "calc(-50vw + 50%)",
          }}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`uppercase tracking-wide text-[1.6rem] leading-[2rem] font-normal px-4 py-2 rounded-[0.6rem] transition-all duration-300 ${
                selectedCategory === cat
                  ? "bg-[rgba(254,44,85,0.15)] text-[#FE2C55]"
                  : "text-[hsl(var(--foreground))] hover:text-[#FE2C55]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid list-none gap-x-16 gap-y-24 py-8 text-left sm:grid-cols-2 lg:grid-cols-3">
          {filteredGames.map((game, index) => (
            <div
              key={game.id}
              ref={(el) => (articlesRef.current[recentGames.length + index] = el)}
              className="blog-feed__item"
              style={{ animationDelay: `${(index % 3) * 150}ms` }}
            >
              <ArticlePreview
                title={game.title}
                slug={game.slug}
                image={game.image}
                imageAlt={game.title}
                category={game.category}
                categorySlug={game.category.toLowerCase()}
                teaser={game.teaser || "My thoughts on this SNES game."}
              />
            </div>
          ))}
        </div>
      </Section>

      <Footer />
    </div>
  );
};

export default Blog;
