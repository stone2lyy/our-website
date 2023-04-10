import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';

type FeatureItem = {
    title: string;
    Svg: React.ComponentType<React.ComponentProps<'svg'>>;
    description: JSX.Element;
    url: string
};

const FeatureList: FeatureItem[] = [
    {
        title: '数独游戏',
        Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
        description: (
            <>
                网页版数独小游戏
            </>
        ),
        url: '/sudoku'
    },
    {
        title: '烟花为你绽放',
        Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
        description: (
            <>请点击！</>
        ),
        url: '/fire'

    },
    {
        title: '我是云兔',
        Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
        description: (
            <>
                找我聊天把
            </>
        ),
        url: '/chat'
    },
];

function Feature({title, Svg, description, url}: FeatureItem) {
    return (
        <div className={clsx('col col--4')}>
            <div className="text--center">
                <Svg className={styles.featureSvg} role="img"/>
            </div>
            <div className="text--center padding-horiz--md">
                <h3>{title}</h3>
                <Link
                    className="button button--secondary button--lg"
                    to={url}>{description}</Link>
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
