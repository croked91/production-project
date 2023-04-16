import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { CountrySelect, CountryT } from 'entities/Country';
import { CurrencyT } from 'entities/Currency';
import { CurrencySelect } from 'entities/Currency/ui/CurrencySelect';
import { Mods, classNames } from 'shared/lib/helpers/classNames';
import { Avatar } from 'shared/ui/Avatar/Avatar';
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
  onChangeAvatar?: (value?: string) => void
  onChangeUsername?: (value?: string) => void
  onChangeCurrency?: (currency: CurrencyT) => void
  onChangeCountry?: (country: CountryT) => void
}

export const ProfileCard:FC<ProfileCardProps> = ({
  className,
  data,
  isLoading,
  error,
  onChangeFirstname,
  onChangeLastname,
  onChangeAge,
  onChangeCity,
  onChangeAvatar,
  onChangeUsername,
  onChangeCurrency,
  onChangeCountry,
  readOnly
}) => {
  const { t } = useTranslation('profile-card');

  if (isLoading) {
    return (
      <div className={classNames(styles.profileCard, {}, [className, styles.loading])}>
        <PageLoader />
      </div>
    );
  }

  const mods: Mods = {
    [styles.editing]: !readOnly
  };

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
    <div className={classNames(styles.profileCard, mods, [className])}>
      <div className={styles.data}>
        {data?.avatar && (
          <div className={styles.avatarWrapper}>
            <Avatar
              alt={data?.avatar}
              src={data?.avatar}
            />
          </div>
        )}
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
          placeholder={t('your age')}
          readOnly={readOnly}
        />
        <Input
          value={data?.city}
          onChange={onChangeCity}
          placeholder={t('your city')}
          readOnly={readOnly}
        />
        <Input
          value={data?.username}
          onChange={onChangeUsername}
          placeholder={t('your username')}
          readOnly={readOnly}
        />
        <Input
          value={data?.avatar}
          onChange={onChangeAvatar}
          placeholder={t('your avatar')}
          readOnly={readOnly}
        />
        <CurrencySelect
          value={data?.currency}
          onChange={onChangeCurrency}
          readOnly={readOnly}
        />
        <CountrySelect
          value={data?.country}
          onChange={onChangeCountry}
          readOnly={readOnly}
        />
      </div>
    </div>
  );
};
