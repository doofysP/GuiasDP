import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Artículos y guías',
    Svg: require('@site/static/img/A1.svg').default,
    description: (
      <>
        Encuentra aquí, de manera organizada, todos los recursos hechos por los
        usuarios del servidor de Discord, además de artículos publicados para su 
        información.
      </>
    ),
  },
  {
    title: 'Todo en un mismo sitio',
    Svg: require('@site/static/img/A2.svg').default,
    description: (
      <>
        No tienes que ir a ningun otro sitio, todo lo encontrarás aquí siempre.
      </>
    ),
  },
  {
    title: 'Colabora al proyecto',
    Svg: require('@site/static/img/A3.svg').default, //<a href="LINKS">palabra</a>
    description: (
      <>
        Tu aporte también vale; contribuye a este proyecto enviándonos tus <a href="https://github.com/doofysP/GuiasDP/issues/new?assignees=&labels=Gu%C3%ADas&template=Guias.yml&title=%5BGu%C3%ADa%5D%3A+">guías</a> o tus ideas frente al <a href="https://github.com/doofysP/GuiasDP/issues/new?assignees=&labels=Mejoramiento&template=Mejoramiento.yml&title=%5BGu%C3%ADa%5D%3A+">mejoramiento</a>.
        <br></br>
        Recuerda tener una cuenta de <a href="https://github.com/">GitHub</a> para hacer tus aportes o comunicarte via Discord con los administradores del servidor
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
