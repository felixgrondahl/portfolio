import React from "react";
import { LinkWrapper } from "./style";
import { ReactComponent as GithubIcon } from "assets/icons/github.svg";
import { ReactComponent as WebIcon } from "assets/icons/globe.svg";

const ProjectLinks = ({ github, website }: { github: string; website: string }) => {
  return (
    <LinkWrapper>
      {github ? (
        <a href={github}>
          <GithubIcon />
          Github
        </a>
      ) : null}
      {website ? (
        <a href={website}>
          <WebIcon />
          Website
        </a>
      ) : null}
    </LinkWrapper>
  );
};

export default ProjectLinks;
