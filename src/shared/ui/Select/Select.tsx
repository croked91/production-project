import { ChangeEvent, memo, useMemo } from 'react';
import { Mods, classNames } from 'shared/lib/helpers/classNames';
import styles from './Select.module.scss';

interface Option {
  value: string;
  content: string
}

interface SelectProps {
  className?: string;
  label?: string;
  options?: Option[];
  value?: string;
  onChange?: (value: string) => void,
  readOnly?: boolean
}

export const Select = memo(({
  className, label, options, value, onChange, readOnly
}: SelectProps) => {
  const optionList = useMemo(() => options?.map(opt => (
    <option
      value={opt.value}
      className={styles.option}
      key={opt.value}
    >
      {opt.content}
    </option>
  )), [options]);

  const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    onChange?.(e.currentTarget.value);
  };

  const mods: Mods = {
  };

  return (
    <div className={classNames(styles.wrapper, mods, [className])}>
      {label && (
        <span className={styles.label}>
          {`${label}>`}
        </span>
      )}
      <select
        disabled={readOnly}
        className={styles.select}
        value={value}
        onChange={onChangeHandler}
      >
        {optionList}
      </select>
    </div>
  );
});
