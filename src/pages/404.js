import React from 'react';
import * as styles from 'styles/error.module.scss';
import { SEO } from 'components/SEO';
import { Link } from 'gatsby';

import PageTemplate from 'components/templates/PageTemplate/PageTemplate';
import Button from 'components/atoms/Button/Button';
import Footer from 'components/organisms/Footer/Footer';

const NotFoundPage = () => {
  return (
    <PageTemplate>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <h2 className={styles.title}>Ups, wystąpił błąd :(</h2>
          <p className={styles.paragraph}>
            Wygląda na to, że strona, której szukasz nie istnieje.
          </p>
          <Link to="/">
            <Button>Powrót do strony głównej</Button>
          </Link>
        </div>
      </div>
      <Footer />
    </PageTemplate>
  );
};

export default NotFoundPage;
export const Head = () => <SEO title="404" />;
