import React from 'react';
import ProjectsQuery from 'hooks/get-projects-data';
import * as styles from './Projects.module.scss';

import ProjectsItem from 'components/molecules/ProjectsItem/ProjectsItem';

const Projects = () => {
  const [projects, setProjects] = React.useState([]);

  return (
    <div>
      <ProjectsQuery setProjects={setProjects} />
      <h2 className={styles.title}>Moje projekty</h2>

      {projects.map((item) => {
        item = item.node;
        return (
          <ProjectsItem
            title={item.title}
            description={item.description.text}
            image={item.screenshot.url}
            livePreview={item.livePreview}
            sourceCode={item.sourceCode}
          />
        );
      })}
    </div>
  );
};

export default Projects;
