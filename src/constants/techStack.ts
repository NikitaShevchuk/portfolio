import html from '../assets/img/stack/html.svg';
import css from '../assets/img/stack/css.svg';
import git from '../assets/img/stack/git.svg';
import ts from '../assets/img/stack/ts.svg';
import sass from '../assets/img/stack/sass.svg';
import js from '../assets/img/stack/js.svg';
import react from '../assets/img/stack/react.svg';
import redux from '../assets/img/stack/redux.svg';
import mui from '../assets/img/stack/mui.svg';
import python from '../assets/img/stack/python.svg';
import node from '../assets/img/stack/node.svg';
import nextjs from '../assets/img/stack/nextjs.svg';
import tailwind from '../assets/img/stack/tailwind.svg';
import nestjs from '../assets/img/stack/nest.svg';
import django from '../assets/img/stack/django.svg';
import express from '../assets/img/stack/express.svg';
import testing from '../assets/img/stack/testing.svg';
import docker from '../assets/img/stack/docker.svg';
import mongodb from '../assets/img/stack/mongodb.svg';
import postgres from '../assets/img/stack/postgres.svg';

export interface TechStackItem {
  image: string;
  title: string;
  exp: string;
  style?: React.CSSProperties;
}

export const techStack = {
  languages: [
    { image: html, title: 'HTML', exp: '3+ years' },
    { image: css, title: 'CSS', exp: '3+ years' },
    { image: sass, title: 'SASS', exp: '3+ years' },
    { image: ts, title: 'Typescript', exp: '1+ year' },
    { image: js, title: 'JS', exp: '2+ years' },
    { image: node, title: 'Node.js', exp: '1+ year' },
    {
      image: python,
      title: 'Python',
      exp: '5 months',
      style: { height: '180px' }
    }
  ] as TechStackItem[],
  frameworks: [
    { image: react, title: 'React', exp: '1+ year' },
    { image: nextjs, title: 'Next.js', exp: '1+ year' },
    { image: nestjs, title: 'Nest.js', exp: '7 months' },
    { image: django, title: 'Django', exp: '5 months' },
    { image: express, title: 'Express.js', exp: '1+ year' },
    { image: redux, title: 'Redux', exp: '1+ year' },
    { image: tailwind, title: 'Tailwind.css', exp: '8 months' },
    { image: mui, title: 'Material UI', exp: '4 months' }
  ] as TechStackItem[],
  databases: [
    { image: mongodb, title: 'MongoDB', exp: '1+ year' },
    { image: postgres, title: 'Postgresql', exp: '1+ year' }
  ] as TechStackItem[],
  otherTools: [
    { image: git, title: 'Git', exp: '2+ years' },
    { image: testing, title: 'Unit & E2E Testing', exp: '2+ years' },
    { image: docker, title: 'Docker', exp: '1+ year' }
  ] as TechStackItem[]
};
