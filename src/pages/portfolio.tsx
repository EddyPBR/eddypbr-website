import { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";

import { projects as projectData } from "../data/projects";

import { DropdownProject } from "../components/DropdownProject";
import { BackToHomeLink } from "../components/BackToHomeLink";

import { Container, ProjectsBox, ActiveProject, Blobs } from "../styles/Portfolio";

type ProjectType = {
  title: string;
  categories: string[];
  abstract: string;
  icon: string;
  thumbnail: string;
  url: string;
  isActive: boolean,
}

export default function Portfolio({ projects: projectData }) {
  const [projects, setProjects] = useState<ProjectType[]>(projectData);
  const [activeProject, setActiveProject] = useState<ProjectType | undefined>();
  const [animate, setAnimate] = useState(true);

  useEffect(() => {
    if(!projectData) {
      return;
    }

    projects[0].isActive = true;
    setActiveProject(projects[0]);

    setTimeout(() => { 
      setAnimate(false);
    }, 1000);
  }, []);

  function handleActiveProject(key: number) {
    if(projects[key] === activeProject) {
      return;
    }

    setActiveProject(projects[key]);
    setAnimate(true);

    setTimeout(() => { 
      setAnimate(false);
    }, 1000);

    const newProjectsArray = projects.map((project, index) => {
      index === key ? project.isActive = true : project.isActive = false;
      return project;
    });

    setProjects(newProjectsArray);
  }

  return (
    <>
      <Head>
        <title>Portfólio | EddyPBR</title>
      </Head>

      <Container>
        <ProjectsBox>
          <div>
            {
              projects.map((project, index) => <DropdownProject key={index} title={project.title} text={project.abstract} categories={project.categories} imageUrl={project.icon} dropped={project.isActive} handleFunction={() => handleActiveProject(index)} />)
            }
          </div>
        </ProjectsBox>

        {
          activeProject && (
            <Link href={activeProject?.url || "/"}>
              <ActiveProject isAnimating={animate}>
                <img src={activeProject?.thumbnail} alt={activeProject?.title} />
              </ActiveProject>
            </Link>
          )
        }
      </Container>

      <Blobs>
        <img src="./images/blob-portfolio-top.svg" alt="Veja o portfólio de EddyPBR" />
        <img src="./images/blob-portfolio-middle.svg" alt="Veja o portfólio de EddyPBR" />
        <img src="./images/blob-portfolio-bottom.svg" alt="Veja o portfólio de EddyPBR" />
      </Blobs>
      
      <BackToHomeLink />
    </>
  )
}

export function getStaticProps() {
  const projects: ProjectType[] = projectData.map((project) => {
    const newProjectData = {
      title: project.title,
      categories: project.categories,
      abstract: project.abstract,
      icon: project.icon,
      thumbnail: project.thumbnail,
      url: project.url,
      isActive: false,
    }
    return newProjectData;
  });

  return {
    props: {
      projects,
    }
  }
};
