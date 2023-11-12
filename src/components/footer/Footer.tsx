import { FC } from 'react';
// import cn from 'classnames'
import styles from './Footer.module.css';

const Footer: FC = () => (
  <div className={styles.footer}>
    <p style={{ cursor: 'pointer' }}>Impressum</p>
    <p className={styles.Impressum} >www.iubenda.de ist ein Angebot der
Iubenda GmbH
Iubendastr. 5
10178 Berlin

E-Mail: kundenservice@iubenda.de
Tel.: 030 1234567890
FAX: 030 1234567890
Geschaftsfuhrer: Iubenda Iubenda
Amtsgericht Berlin Charlottenburg, HRB 123456789 B

USt-ID-Nr: DE1234567890</p>

  </div>
);

export default Footer;
