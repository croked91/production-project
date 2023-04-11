import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/helpers/classNames';
import { Select } from 'shared/ui/Select/Select';
import { Currency, CurrencyT } from '../model/types/currency';

interface CurrencySelectProps {
  className?: string;
  value?: string;
  onChange?: (currency: CurrencyT) => void,
  readOnly?: boolean
}

const options = [
  { value: Currency.EUR, content: Currency.EUR },
  { value: Currency.RUB, content: Currency.RUB },
  { value: Currency.USD, content: Currency.USD }
];

export const CurrencySelect = memo(({
  className, value, onChange, readOnly
}: CurrencySelectProps) => {
  const { t } = useTranslation();

  const onChangeHandler = (currency: string) => {
    onChange?.(currency as CurrencyT);
  };

  return (
    <Select
      readOnly={readOnly}
      value={value}
      className={classNames('', {}, [className])}
      onChange={onChangeHandler}
      label={t('choose currency')}
      options={options}
    />
  );
});
