import { memo } from 'react';
import { useTranslation } from 'react-i18next';

const Main = memo(() => {
  const { t } = useTranslation('main-page');

  return (
    <div>{t('Main')}</div>
  );
});

export default Main;
