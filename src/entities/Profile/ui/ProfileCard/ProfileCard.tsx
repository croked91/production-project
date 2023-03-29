import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/helpers/classNames';
import { Input } from 'shared/ui/Input';
import { PageLoader } from 'shared/ui/PageLoader';
import { Text, TextTheme } from 'shared/ui/Text';
import { TextAlign } from 'shared/ui/Text/ui/Text';
import { IProfile } from '../../model/types/profile';
import styles from './ProfileCard.module.scss';

interface ProfileCardProps {
  className?: string;
  data?: IProfile;
  isLoading?: boolean;
  error?: string;
  readOnly?: boolean;
  onChangeFirstname?: (value?: string) => void
  onChangeLastname?: (value?: string) => void
  onChangeAge?: (value?: string) => void
  onChangeCity?: (value?: string) => void
}

export const ProfileCard:FC<ProfileCardProps> = ({
  className, data, isLoading, error, onChangeFirstname, onChangeLastname, onChangeAge, onChangeCity, readOnly
}) => {
  const { t } = useTranslation('profile-card');

  if (isLoading) {
    return (
      <div className={classNames(styles.profileCard, {}, [className, styles.loading])}>
        <PageLoader />
      </div>
    );
  }

  if (error) {
    return (
      <div className={classNames(styles.profileCard, {}, [className, styles.error])}>
        <Text
          theme={TextTheme.ERROR}
          title={t('loading error')}
          text={t('try to reload')}
          align={TextAlign.CENTER}
        />
      </div>
    );
  }

  return (
    <div className={classNames(styles.profileCard, {}, [className])}>
      <div className={styles.data}>
        <Input
          value={data?.first}
          onChange={onChangeFirstname}
          placeholder={t('Your Name')}
          readOnly={readOnly}
        />
        <Input
          value={data?.lastname}
          onChange={onChangeLastname}
          placeholder={t('Your Lastname')}
          readOnly={readOnly}
        />
        <Input
          value={data?.age}
          onChange={onChangeAge}
          placeholder={t('vash-vozrast')}
          readOnly={readOnly}
        />
        <Input
          value={data?.city}
          onChange={onChangeCity}
          placeholder={t('your city')}
          readOnly={readOnly}
        />
      </div>
    </div>
  );
};
