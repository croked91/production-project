import { memo } from 'react';
import { classNames } from 'shared/lib/helpers/classNames'
import styles from './<FTName>.module.scss'
import { useTranslation } from 'react-i18next'

interface <FTName>Props {
  className?: string;
}

export const <FTName> = memo(({className}: <FTName>Props) => {
const { t } = useTranslation();

  return (
    <div className={classNames(styles.<FTName>)}>
    </div>
  )
})