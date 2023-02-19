import { GetStaticProps } from "next";
import { ReactElement } from "react";
import Container from "~/components/container";
import BaseLayout from "~/layouts/base";

type FeaturedProject = {
  language: string;
  name: string;
  description: string;
  hidden: boolean;
};

type FeaturedPost = {
  category: string;
  title: string;
  description: string;
  tags: string[];
  hidden: boolean;
};

type Props = {
  featuredProjects: FeaturedProject[];
  featuredPosts: FeaturedPost[];
};

export default function Home({
  featuredProjects = [],
  featuredPosts = [],
}: Props): ReactElement {
  return (
    <Container meta={{ title: "Home", description: "Home Page" }}>
      <BaseLayout>
        <main>
          <h1 className="sr-only">Home</h1>
          <section className="mx-2">
            <h2 className="mb-2 text-2xl text-white">Featured Projects</h2>

            <div className="flex flex-col">
              {featuredProjects.map((project, idx) => (
                <FeaturedProjectPreview
                  key={`project-${idx}`}
                  preview={project}
                />
              ))}
            </div>
            {/* <p><Link href="/projects">View More</Link></p> */}
          </section>
          <section className="mx-2">
            <h2 className="mb-2 text-2xl text-white">Featured Posts</h2>
            <div className="flex flex-col">
              {featuredPosts.map((post, idx) => (
                <FeaturedPostPreview key={`post-${idx}`} preview={post} />
              ))}
            </div>
            {/* <p><Link href="/posts">View More</Link></p> */}
          </section>
        </main>
      </BaseLayout>
    </Container>
  );
}

function FeaturedProjectPreview({ preview }: { preview: FeaturedProject }) {
  return (
    <article className="mb-1 rounded bg-neutral-800 p-2 shadow">
      <header>
        {preview.language && (
          <p className="text-[10px] uppercase tracking-widest text-white">
            {preview.language}
          </p>
        )}
        <h3 className="text-[20px] text-white">{preview.name}</h3>
      </header>
      <p className="text-secondary text-sm">{preview.description}</p>
    </article>
  );
}

function FeaturedPostPreview({ preview }: { preview: FeaturedPost }) {
  return (
    <article className="mb-1 rounded bg-neutral-800 p-2 shadow">
      <header>
        {preview.category && (
          <p className="text-[10px] uppercase tracking-widest text-white">
            {preview.category}
          </p>
        )}
        <h3 className="text-xl text-white">{preview.title}</h3>
      </header>
      <p className="mb-3 text-sm">{preview.description}</p>
      <ul className="flex text-xs">
        {preview.tags.map((tag, idx) => (
          <li key={`tag-${idx}`} className="tag">
            {tag}
          </li>
        ))}
      </ul>
    </article>
  );
}

export const getStaticProps: GetStaticProps<Props> = () => {
  return {
    props: {
      featuredProjects: [
        {
          language: "Rust",
          name: "Artisan",
          description: "A TOML based Project Generator",
          hidden: false,
        },
        {
          language: "Typescript",
          name: "Proto-ui",
          description: "React based Component Library",
          hidden: true,
        },
        {
          language: "Typescript",
          name: "Nimbus",
          description: "Tailwindcss based Design System",
          hidden: true,
        },
      ].filter(({ hidden }) => !hidden),
      featuredPosts: [
        {
          category: "Web Development",
          title: "Some blog post text",
          description: "Blog post description",
          tags: ["React", "Design Patterns", "TypeScript"],
          hidden: false,
        },
      ].filter(({ hidden }) => !hidden),
    },
  };
};
