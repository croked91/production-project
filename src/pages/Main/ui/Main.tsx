import { useTranslation } from 'react-i18next';

const Main = () => {
	const { t } = useTranslation('main');

	return <div>{t('main-page')}</div>;
};

export default Main;
