import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Text } from 'shared/ui/Text';

const Main = memo(() => {
  const { t } = useTranslation('main-page');

  return (
    <Text text={t('Main')} />
  );
});

export default Main;
