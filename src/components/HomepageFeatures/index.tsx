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
    title: '强大的生态',
    Svg: null,
    // Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        引入Node.js以及JavaScript生态众多的库和工具链，结合专业商业引擎的渲染能力，快速打造游戏。
      </>
    ),
  },
  {
    title: '拥有静态检查的脚本',
    Svg: null,
    // Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        相比游戏领域常用的lua脚本，TypeScript的静态类型检查有助于编写更健壮，可维护性更好的程序
      </>
    ),
  },
  {
    title: '高效/高性能',
    Svg: null,
    // Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        支持反射Binding，无需额外（生成代码）步骤即可开发。也支持静态Binding，兼顾了高性能的场景。
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
