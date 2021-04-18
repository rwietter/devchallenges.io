import styles from '../components/footer/styles.module.scss';

function Footer() {
  return (
    <footer className={styles.footer}>
      <a
        target="_blank"
        rel="norefer noreferrer"
        href="https://twitter.com/rwietter">
        By @rwietter
      </a>
    </footer>
  );
}

export default Footer;
