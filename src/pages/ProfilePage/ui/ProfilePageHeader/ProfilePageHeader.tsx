import { getProfileReadonly } from 'entities/Profile';
import { cancelEdit, setReadonly } from 'entities/Profile/model/slice/profileSlice';
import { FC, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/helpers/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Text } from 'shared/ui/Text';
import styles from './ProfilePageHeader.module.scss';

interface ProfilePageHeaderProps {
  className?: string;
}

export const ProfilePageHeader:FC<ProfilePageHeaderProps> = ({ className }) => {
  const { t } = useTranslation('profile-page');

  const readonly = useSelector(getProfileReadonly);
  const dispatch = useAppDispatch();

  const onEdit = useCallback(
    () => { dispatch(setReadonly(false)); },
    [dispatch]
  );

  const onCancelEdit = useCallback(
    () => { dispatch(cancelEdit()); },
    [dispatch]
  );

  const onSave = useCallback(
    () => { dispatch(cancelEdit()); },
    [dispatch]
  );

  return (
    <div className={classNames(styles.profilePageHeader, {}, [className])}>
      <Text title={t('user-profile')} />
      {readonly ? (
        <Button
          className={styles.editBtn}
          theme={ButtonTheme.OUTLINE}
          onClick={onEdit}
        >
          {t('edit-button-0')}
        </Button>
      ) : (
        <div className={styles.profilePageHeader__buttons}>
          <Button
            className={styles.editBtn}
            theme={ButtonTheme.OUTLINE_RED}
            onClick={onCancelEdit}
          >
            {t('cancel')}
          </Button>
          <Button
            className={styles.saveBtn}
            theme={ButtonTheme.OUTLINE}
            onClick={onSave}
          >
            {t('save')}
          </Button>
        </div>
      )}
    </div>
  );
};
