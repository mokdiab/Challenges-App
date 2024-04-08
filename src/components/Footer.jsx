import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes.container}>
        <p className={classes.footerText}>
          copyright &copy; 2024{" "}
          <a
            href="https://www.linkedin.com/in/modiab1/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Mohamed Diab
          </a>
        </p>
        <p className={`${classes.footerText} ${classes.textFrom}`}>
          From Maximilian Schwarzmüller
        </p>
      </div>
    </footer>
  );
};

export default Footer;
