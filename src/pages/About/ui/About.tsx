import { memo } from 'react';
import { useTranslation } from 'react-i18next';

const About = memo(() => {
  const { t } = useTranslation('about-page');
  return <div>{t('Aboute website')}</div>;
});

export default About;
