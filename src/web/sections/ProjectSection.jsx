import React, { useState, useEffect } from "react";

import ProjectItem from "../components/ProjectItem";
import Section from "../components/Section";
import WebApiHandler from "../../api/apiHandler";

const api = new WebApiHandler();

export default function ProjectSection() {
  const [loading, setLoading] = useState();
  const [projects, setProjects] = useState([
    {
      stars: 57,
      commits: 732,
      forks: 21,
      language: "Python",
      name: "tortoise-bot",
      short_desc: "Fully functional Bot for Discord coded in Discord.py",
      github: "https://github.com/Tortoise-Community/Tortoise-Bot",
    },
    {
      stars: 1,
      commits: 3,
      forks: 1,
      language: "Python",
      name: "runtime-bot",
      short_desc:
        "Discord bot for executing code directly in chat using the Hermes sandbox engine.",
      github: "https://github.com/Tortoise-Community/Runtime-Bot",
    },
    {
      stars: 1,
      commits: 25,
      forks: 1,
      language: "Python",
      name: "snappy-bot",
      short_desc:
        "Snappy is a lightweight Discord bot built using discord.py v2+",
      github: "https://github.com/Tortoise-Community/Snappy-Bot",
    },
    {
      stars: 8,
      commits: 573,
      forks: 1,
      language: "Django",
      name: "site-backend",
      short_desc:
        "Website build with django for the Tortoise Community discord server",
      github: "https://github.com/Tortoise-Community/site-ackend",
    },
    {
      stars: 1,
      commits: 119,
      forks: 1,
      language: "React",
      name: "site-frontend",
      short_desc:
        "Web frontend built with React for Tortoise Community discord server",
      github: "https://github.com/Tortoise-Community/site-frontend",
    },
    {
      stars: 9,
      commits: 290,
      forks: 7,
      language: "React",
      name: "code-studio",
      short_desc:
        "A free and open-source platform to practice DSA online with community-driven resources",
      github: "https://github.com/Tortoise-Community/code-studio",
    },
  ]);
  useEffect(() => {
    //    const fetchData = async () => {
    //        const projects = await api.getProjects();
    //        setProjects(projects.data)
    //        setLoading(false)
    //    };
    //    fetchData();
    setLoading(false);
  }, []);
  return (
    <Section title={"Projects"}>
      <div className="row g-4">
        {projects.map((projectItem) => (
          <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
            <ProjectItem data={projectItem} loading={loading} />
          </div>
        ))}
      </div>
    </Section>
  );
}
