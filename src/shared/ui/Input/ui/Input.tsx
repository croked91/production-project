import {
  ChangeEvent, InputHTMLAttributes, memo, useEffect, useRef, useState
} from 'react';
import { classNames, Mods } from 'shared/lib/helpers/classNames';
import styles from './Input.module.scss';

type HTMLInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'value' | 'onChange' | 'readonly'
>;

interface InputProps extends HTMLInputProps {
  className?: string;
  value: string | undefined | number;
  onChange?: (value: string) => void;
  placeholder?: string;
  autofocus?: boolean;
  readonly?: boolean
}

export const Input = memo(
  ({
    className,
    value,
    onChange,
    placeholder,
    type = 'text',
    autofocus,
    readOnly,
    ...otherProps
  }: InputProps) => {
    const [isFocused, setIsFocused] = useState<boolean>(false);
    const [carettePosition, setCarettePosition] = useState<number>(0);

    const isCarreteVisible = isFocused && !readOnly;

    const ref = useRef<HTMLInputElement>(null);
    useEffect(() => {
      if (autofocus) {
        setIsFocused(true);
        ref.current?.focus();
      }
    }, [autofocus]);

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
      onChange?.(e.currentTarget.value);
      setCarettePosition(String(value)?.length || 0);
    };

    const onFocusHandler = () => {
      setIsFocused(true);
    };

    const onBlurHandler = () => {
      setIsFocused(false);
    };

    const onSelectHandler = (e: any) => {
      setCarettePosition(e?.target?.selectionStart || 0);
    };

    const mods: Mods = {
      [styles.readOnly]: 'readOnly'
    };

    return (
      <div className={classNames(styles.inputWrapper, {}, [className])}>
        {placeholder && (
          <div className={styles.placeholder}>{`${placeholder} >`}</div>
        )}
        <div className={styles.caretteWrapper}>
          <input
            ref={ref}
            className={classNames(styles.input, mods, [])}
            value={value}
            onChange={onChangeHandler}
            type={type}
            onFocus={onFocusHandler}
            onBlur={onBlurHandler}
            readOnly={readOnly}
            onSelect={onSelectHandler}
            {...otherProps}
          />
          {isCarreteVisible && (
            <span
              style={{ left: `${carettePosition * 9.7}px` }}
              className={styles.carette}
            />
          )}
        </div>
      </div>
    );
  }
);
