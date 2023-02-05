import React from "react";
import { footerVariants, staggerChildren } from "../../utils/motion";
import css from "./Footer.module.scss";
import {motion} from 'framer-motion'
const Footer = () => {
  return (
    <motion.section
    variants={staggerChildren}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.25 }}
    className={`paddings ${css.wrapper}`}>
      
      
      <motion.div
      variants={footerVariants}
      className={`innerWidth yPaddings flexCenter ${css.container}`}>
        <div className={css.left}>
          <span className="primaryText">
            Let's create awesome projects.
          </span>
          <span className="primaryText">
            Email at: <a href="mailto:devsyndicate@proton.me">221TechLead</a>
          </span>
        </div>

        <div className={css.right}>
          <div className={css.info}>
            <span className="secondaryText">Contacts</span>
            <p>Ripple IT Managed Services Atlanta <a className={css.a} href="https://www.221techlead.com" target="_blank"><span className={css.span}>221TechLead Dev</span></a></p>
          </div>
          <ul className={css.menu}>
            <li>Services</li>
            <li>Works</li>
            <li>Notes</li>
            <li>Experience</li>
          </ul>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Footer;
