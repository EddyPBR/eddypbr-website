import { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";

import { projects as projectData } from "../data/projects";

import { SEO } from "../components/SEO";
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
        <SEO 
          title="EddyPBR - Portfólio" 
          description="Portfólio pessoal com projetos utilizando NodeJS - React - NextJS - React Native - Figma - MySQL - NoSQL e afins!"
          url={`${process.env.NEXT_PUBLIC_VERCEL_URL}/blog`}
          urlImage={`${process.env.NEXT_PUBLIC_VERCEL_URL}/eddypbr-cover.jpg`}
          type="website"
        />
      </Head>

      <Container>
        <ProjectsBox>
          <section>
            {
              projects.map((project, index) => <DropdownProject key={index} title={project.title} text={project.abstract} categories={project.categories} imageUrl={project.icon} dropped={project.isActive} handleFunction={() => handleActiveProject(index)} />)
            }
          </section>
        </ProjectsBox>

        {
          activeProject && (
            <Link href={activeProject?.url || "/"}>
              <ActiveProject isAnimating={animate}>
                <img src={activeProject?.thumbnail} alt={activeProject?.title} width={346} height={242} />
              </ActiveProject>
            </Link>
          )
        }
      </Container>

      <Blobs>
      <svg width="474" height="441" viewBox="0 0 474 441" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M8.42294 -66.3095C53.1648 -97.5801 117.853 -97.6934 167.889 -75.8739C213.541 -55.9659 215.034 11.1535 254.805 41.1321C301.589 76.3972 385.65 56.409 412.477 108.493C438.224 158.481 408.849 225.771 371.603 267.895C337.565 306.389 277.302 298.123 229.088 315.893C192.001 329.562 161.615 360.318 122.092 359.855C80.5368 359.368 38.1486 343.638 9.72335 313.322C-17.6738 284.103 -15.7807 240.413 -26.1722 201.73C-37.3389 160.161 -58.8083 121.406 -53.2986 78.7166C-46.4047 25.3038 -35.72 -35.4574 8.42294 -66.3095Z" fill="url(#paint0_linear)"/>
        <defs>
          <linearGradient id="paint0_linear" x1="39.3018" y1="-84.6651" x2="277.081" y2="327.181" gradientUnits="userSpaceOnUse">
            <stop stopColor="#6C63FF"/>
            <stop offset="1" stopColor="#E3216D"/>
          </linearGradient>
        </defs>
      </svg>

      <svg width="467" height="689" viewBox="0 0 467 689" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M393.735 69.6309C458.682 76.1493 521.384 107.932 562.966 158.247C604.766 208.826 625.868 276.742 618.809 341.977C612.266 402.451 563.455 445.858 526.611 494.257C492.971 538.448 467.294 596.321 413.808 611.276C361.293 625.958 313.786 577.66 259.982 568.804C196.715 558.39 112.845 605.251 72.8319 555.15C32.731 504.939 96.9846 433.301 100.522 369.139C103.484 315.396 67.0409 259.675 91.7562 211.86C117.01 163.002 177.205 147.959 226.961 124.524C281.236 98.9613 334.041 63.6398 393.735 69.6309Z" fill="url(#paint0_linear)"/>
        <defs>
          <linearGradient id="paint0_linear" x1="306.779" y1="173.267" x2="424.459" y2="622.23" gradientUnits="userSpaceOnUse">
            <stop stopColor="#6C63FF"/>
            <stop offset="1" stopColor="#E3216D"/>
          </linearGradient>
        </defs>
      </svg>

      <svg width="645" height="372" viewBox="0 0 645 372" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M259.536 651.947C199.058 647.39 141.594 615.959 104.547 564.11C67.3056 511.99 50.0418 440.733 59.0057 371.298C67.3155 306.931 114.52 259.13 150.718 206.468C183.768 158.386 209.871 96.0831 260.414 78.2852C310.038 60.8109 352.698 110.306 402.675 117.747C461.441 126.496 541.545 73.7597 577.134 125.439C612.8 177.231 550.136 255.53 544.503 323.699C539.784 380.799 571.832 438.567 546.993 490.169C521.613 542.896 464.796 561.032 417.432 587.687C365.768 616.764 315.122 656.135 259.536 651.947Z" fill="url(#paint0_linear)"/>
        <defs>
          <linearGradient id="paint0_linear" x1="344.584" y1="538.892" x2="193.889" y2="86.0102" gradientUnits="userSpaceOnUse">
            <stop stopColor="#6C63FF"/>
            <stop offset="1" stopColor="#E3216D"/>
          </linearGradient>
        </defs>
      </svg>
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
