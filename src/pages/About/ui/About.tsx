import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Text } from 'shared/ui/Text';

const About = memo(() => {
  const { t } = useTranslation('about-page');
  return <Text text={t('Aboute website')} />;
});

export default About;
