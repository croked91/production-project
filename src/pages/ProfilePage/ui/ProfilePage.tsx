import { profileReducer } from 'entities/Profile';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { classNames } from 'shared/lib/helpers/classNames';
import styles from './ProfilePage.module.scss';

interface ProfilePageProps {
  className?: string;
}

const reducersList: ReducersList = {
  profile: profileReducer
};

const ProfilePage = memo(({ className }:ProfilePageProps) => {
  const { t } = useTranslation();

  return (
    <DynamicModuleLoader reducers={reducersList} removeAfterUnmount>
      <div className={classNames(styles.profilepage, {}, [className])}>
        {t('Profile page')}
      </div>
    </DynamicModuleLoader>
  );
});

export default ProfilePage;
