import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import { chainConfig } from '../../chain-config';


type FeatureItem = {
  title: string;
  description: ReactNode;
};


const FeatureList: FeatureItem[] = [
  {
    title: 'Builder Guides',
    description: (
      <>
        Leverage our entire suite of tools and features to build stunning apps. 
      </>
    ),
  },
  {
    title: 'Featured Tools',
    description: (
      <>
        Take a look at our innovative tools so you can start building
      </>
    ),
  },
  {
    title: 'About the chain',
    description: (
      <>
        {chainConfig.description}
      </>
    ),
  },
];

function Feature({title, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
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
