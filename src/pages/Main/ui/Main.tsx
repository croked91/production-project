import { useTranslation } from 'react-i18next';

const Main = () => {
  const { t } = useTranslation('main-page');

  return (
    <div>{t('Main')}</div>
  );
};

export default Main;
