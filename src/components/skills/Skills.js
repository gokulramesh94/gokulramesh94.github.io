import React from 'react';
import { CgTrello } from 'react-icons/cg';
import {
  DiBitbucket,
  DiGit,
  DiJavascript1,
  DiNodejs,
  DiMongodb,
  DiSass
} from 'react-icons/di';
import { FaBootstrap, FaJava, FaJira, FaReact, FaVuejs } from 'react-icons/fa';
import {
  SiAdobexd,
  SiAndroidstudio,
  SiAzuredevops,
  SiCsharp,
  SiEclipseide,
  SiFirebase,
  SiGraphql,
  SiHeroku,
  SiJquery,
  SiLinux,
  SiMysql,
  SiNestjs,
  SiNetlify,
  SiNextdotjs,
  SiPostgresql,
  SiPostman,
  SiSwift,
  SiTailwindcss,
  SiTypescript,
  SiVisualstudio,
  SiVisualstudiocode,
  SiXcode
} from 'react-icons/si';
import { techStack, toolStack } from '../../constants/config';
import SkillTile from './SkillTile';
import './Skills.scss';

const Skills = () => {
  const techstackComponents = {
    DiJavascript1,
    DiNodejs,
    SiNestjs,
    DiMongodb,
    DiSass,
    FaBootstrap,
    FaJava,
    FaReact,
    FaVuejs,
    SiCsharp,
    SiFirebase,
    SiGraphql,
    SiJquery,
    SiMysql,
    SiNextdotjs,
    SiPostgresql,
    SiSwift,
    SiTailwindcss,
    SiTypescript
  };
  const toolstackComponents = {
    CgTrello,
    DiBitbucket,
    DiGit,
    FaJira,
    SiEclipseide,
    SiLinux,
    SiVisualstudio,
    SiVisualstudiocode,
    SiPostman,
    SiHeroku,
    SiAdobexd,
    SiXcode,
    SiAndroidstudio,
    SiAzuredevops,
    SiNetlify
  };
  return (
    <div>
      <div className="stack-wrapper">
        <div className="skill-tile-title">Tech Stack</div>
        <SkillTile components={techstackComponents} items={techStack} />
      </div>
      <div className="stack-wrapper">
        <div className="skill-tile-title">Tool Stack</div>
        <SkillTile components={toolstackComponents} items={toolStack} />
      </div>
    </div>
  );
};

export default Skills;
