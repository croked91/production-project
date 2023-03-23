import { getProfileData } from 'entities/Profile/model/selectors/getProfileData/getProfileData';
import { getProfileError } from 'entities/Profile/model/selectors/getProfileError/getProfileError';
import { getProfileIsLoading } from 'entities/Profile/model/selectors/getProfileIsLoading/getProfileIsloading';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/helpers/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input';
import { Text } from 'shared/ui/Text';
import styles from './ProfileCard.module.scss';

interface ProfileCardProps {
  className?: string;
}

export const ProfileCard:FC<ProfileCardProps> = ({ className }) => {
  const { t } = useTranslation('profile-card');

  const data = useSelector(getProfileData);
  const isLoading = useSelector(getProfileIsLoading);
  const error = useSelector(getProfileError);

  return (
    <div className={classNames(styles.profileCard, {}, [className])}>
      <div className={styles.header}>
        <Text title={t('User Profile')} />
        <Button
          className={styles.editBtn}
          theme={ButtonTheme.OUTLINE}
        >
          {t('edit button')}
        </Button>
      </div>
      <div className={styles.data}>
        <Input
          value={data?.first}
          placeholder={t('Your Name')}
        />
        <Input
          value={data?.lastname}
          placeholder={t('Your Lastname')}
        />
      </div>
    </div>
  );
};
