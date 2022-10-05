import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'GitHub Knowledge',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
      一个不懂技术的项目经理对GitHub的认知: 在不懂代码的情况下可以操作GitHub的哪些内容。
      </>
    ),
  },
  {
    title: 'Project Knowledge',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        一个历经多年项目经历的项目经理对项目的认知: 在多年的积累下可以分享项目的哪些内容。
      </>
    ),
  },
  {
    title: 'Others',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        一个喜欢挑战的项目经理对其他知识的认知。
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
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
