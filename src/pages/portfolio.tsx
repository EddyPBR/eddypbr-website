import { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";

import { DropdownProject } from "../components/DropdownProject";

import { Container, ProjectsBox, ActiveProject, Blobs } from "../styles/Portfolio";

type FetchedProject = {
  title: string,
  category: string,
  abstract: string,
  icon: string,
  thumbnail: string,
  url: string,
}

type Project = FetchedProject & {
  isActive: boolean;
}

export default function Portfolio() {
  const fetchProjects: FetchedProject[] = [
    {
      title: "Letmeask",
      category: "web | pwa",
      abstract: "Sistema de perguntas e respostas com ranqueamento de likes, excelente para responder perguntas em lives!",
      icon: "./projects/letmeask/letmeask-icon.jpg",
      thumbnail: "./projects/letmeask/letmeask-thumbnail.jpg",
      url: "#",
    },
    {
      title: "Gameplay",
      category: "mobile",
      abstract: "Agende jogatinas com seus amigos com integração via discord app!",
      icon: "./projects/gameplay/gameplay-icon.jpg",
      thumbnail: "./projects/gameplay/gameplay-thumbnail.jpg",
      url: "#",
    },
    {
      title: "Move-it",
      category: "web",
      abstract: "Técnica de pomodoro com desafios de relaxamento corporais e oculares em um sistema de leveling up!",
      icon: "./projects/moveit/moveit-icon.jpg",
      thumbnail: "./projects/moveit/moveit-thumbnail.jpg",
      url: "#",
    },
    {
      title: "Mural digital",
      category: "api | web | mobile",
      abstract: "Um sistema para informar e alertar anúncios e notícias para os funcionários da empresa!",
      icon: "./projects/muraldigital/muraldigital-icon.jpg",
      thumbnail: "./projects/muraldigital/muraldigital-thumbnail.jpg",
      url: "#"
    },
    {
      title: "Codebacker",
      category: "mobile",
      abstract: "Um aplicativo para controle do carregamento de produtos em veículos empresariais!",
      icon: "./projects/codebacker/codebacker-icon.jpg",
      thumbnail: "./projects/codebacker/codebacker-thumbnail.jpg",
      url: "#"
    }
  ];

  const [projects, setProjects] = useState<Project[]>([]);
  const [activeProject, setActiveProject] = useState<Project | undefined>();
  const [animate, setAnimate] = useState(true);

  useEffect(() => {
    if(!fetchProjects) {
      return;
    }
    
    const projects: Project[] = fetchProjects.map((project) => {
      const newProject = Object.assign({ isActive: false }, project);
      return newProject;
    });

    projects[0].isActive = true;
    setActiveProject(projects[0]);

    setTimeout(() => { 
      setAnimate(false);
    }, 1000);

    setProjects(projects);
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
              projects.map((project, index) => <DropdownProject key={index} title={project.title} text={project.abstract} category={project.category} imageUrl={project.icon} dropped={project.isActive} handleFunction={() => handleActiveProject(index)} />)
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
    </>
  )
}