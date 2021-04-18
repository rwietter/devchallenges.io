/* eslint-disable import/extensions */
/* eslint-disable no-alert */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

import Button from "../components/button";
import styles from '../components/main/styles.module.scss';
import Copy from "../public/copy";
import {
  buttonDefault,
  buttonState,
  buttonIcon,
  buttonSize,
  buttonType
} from './api/data';

export default function ButtonView() {

  const handleClick = async (selector: string) => {
    const text = document.querySelector(`.${selector}`)?.textContent;
    
    if(!text) return false;

    await navigator.clipboard?.writeText(text);
    return alert(`copying: ${text}`);
  };

  return (
    <>
      <h1 style={{ textAlign: `center` }}>Button component</h1>
      <main className={styles.container}>
        <section className={styles.c_items}>
          {buttonDefault.map(({ className, name, label, props }) => (
            <section key={props} className={styles.button_card}>
              <p>
                <code className={className}>{label}</code>
                <span onClick={() => handleClick(className)}>
                  <Copy />
                </span>
              </p>
              <Button type="button" {...props}>
                <span>{name}</span>
              </Button>
            </section>
          ))}
        </section>

        <section className={styles.c_items}>
          {buttonState.map(({ className, label, name, props }) => (
            <section key={props} className={styles.button_card}>
              <p>
                <code className={className}>{label}</code>
                <span onClick={() => handleClick(className)}>
                  <Copy />
                </span>
              </p>
              <Button {...props}>
                <span>{name}</span>
              </Button>
            </section>
          ))}
        </section>

        <section className={styles.c_items}>
          {buttonIcon.map(({ className, label, name, props }) => (
            <section key={props} className={styles.button_card}>
              <p>
                <code className={className}>{label}</code>
                <span onClick={() => handleClick(className)}>
                  <Copy />
                </span>
              </p>
              <Button {...props}>
                <span>{name}</span>
              </Button>
            </section>
          ))}
        </section>

        <section className={styles.c_items}>
          {buttonSize.map(({ className, label, name, props }) => (
            <section key={props} className={styles.button_card}>
              <p>
                <code className={className}>{label}</code>
                <span onClick={() => handleClick(className)}>
                  <Copy />
                </span>
              </p>
              <Button {...props}>
                <span>{name}</span>
              </Button>
            </section>
          ))}

        </section>

        <section className={styles.c_items}>
          
          {buttonType.map(({ className, label, props, name }) => (
            <section key={props} className={styles.button_card}>
              <p>
                <code className={className}>{label}</code>
                <span onClick={() => handleClick(className)}>
                  <Copy />
                </span>
              </p>
              <Button {...props}>
                <span>{name}</span>
              </Button>
            </section>
          ))}
        </section>
      </main>
    </>
  );
}
