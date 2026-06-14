import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { ProjectsGrid } from "@/components/sections/projects-grid";
import { getProjects } from "@/lib/sanity/fetch";

export async function Projects() {
  const projects = await getProjects();

  return (
    <section id="projects" className="bg-cream py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Our Work"
          title="Projects we're proud of"
          description="A look at recent residential, commercial, corporate and vertical garden installations."
        />

        <div className="mt-16">
          <ProjectsGrid projects={projects} />
        </div>
      </Container>
    </section>
  );
}
