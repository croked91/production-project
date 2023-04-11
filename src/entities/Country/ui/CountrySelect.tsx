import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/helpers/classNames';
import { Select } from 'shared/ui/Select/Select';
import { Country, CountryT } from '../model/types/country';

interface CountrySelectProps {
  className?: string;
  value?: string;
  onChange?: (country: CountryT) => void,
  readOnly?: boolean
}

const options = [
  { value: Country.Russia, content: Country.Russia },
  { value: Country.Belarus, content: Country.Belarus },
  { value: Country.Ukraine, content: Country.Ukraine }
];

export const CountrySelect = memo(({
  className, value, onChange, readOnly
}: CountrySelectProps) => {
  const { t } = useTranslation();

  const onChangeHandler = (country: string) => {
    onChange?.(country as CountryT);
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
