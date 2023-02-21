import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'strong ecosystem',
    Svg: null,
    // Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Facililates game building processes by combining JavaScript ecosystem with the rendering power of professional game engines. Node.js is also supported
      </>
    ),
  },
  {
    title: 'script with static type check',
    Svg: null,
    // Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        In contrast to lua script, TypeScript supports static type checking, which significantly improves code robustness and maintainability.
      </>
    ),
  },
  {
    title: 'High efficiency/performance',
    Svg: null,
    // Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Supports reflection binding - no extra steps (code generation) needed for development. supports static binding - takes care of complex scenes.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        {/* <Svg className={styles.featureSvg} role="img" /> */}
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
