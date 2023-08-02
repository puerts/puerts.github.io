import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import Translate from '@docusaurus/Translate';

type FeatureItem = {
  title: JSX.Element;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: (<Translate>强大的生态</Translate>),
    Svg: null,
    // Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <Translate>
        引入Node.js以及JavaScript生态众多的库和工具链，结合专业商业引擎的渲染能力，快速打造游戏。
      </Translate>
    ),
  },
  {
    title: (<Translate>拥有静态检查的脚本</Translate>),
    Svg: null,
    // Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <Translate>
        相比游戏领域常用的lua脚本，TypeScript的静态类型检查有助于编写更健壮，可维护性更好的程序
      </Translate>
    ),
  },
  {
    title: (<Translate>高效/高性能</Translate>),
    Svg: null,
    // Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <Translate>
        支持反射调用，无需额外步骤即可跨语言调用。也支持生成静态调用桥梁，兼顾了高性能的场景。
      </Translate>
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
