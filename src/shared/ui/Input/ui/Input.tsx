import {
  ChangeEvent, InputHTMLAttributes, memo, useEffect, useRef, useState
} from 'react';
import { classNames } from 'shared/lib/helpers/classNames';
import styles from './Input.module.scss';

type HTMLInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'value' | 'onChange'
>;

interface InputProps extends HTMLInputProps {
  className?: string;
  value: string | undefined;
  onChange?: (value: string) => void;
  placeholder?: string;
  autofocus?: boolean;
}

export const Input = memo(
  ({
    className,
    value,
    onChange,
    placeholder,
    type = 'text',
    autofocus,
    ...otherProps
  }: InputProps) => {
    const [isFocused, setIsFocused] = useState<boolean>(false);
    const [carettePosition, setCarettePosition] = useState<number>(0);

    const ref = useRef<HTMLInputElement>(null);
    useEffect(() => {
      if (autofocus) {
        setIsFocused(true);
        ref.current?.focus();
      }
    }, [autofocus]);

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
      onChange?.(e.currentTarget.value);
      setCarettePosition(value?.length || 0);
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

    return (
      <div className={classNames(styles.inputWrapper, {}, [className])}>
        {placeholder && (
          <div className={styles.placeholder}>{`${placeholder} >`}</div>
        )}
        <div className={styles.caretteWrapper}>
          <input
            ref={ref}
            className={styles.input}
            value={value}
            onChange={onChangeHandler}
            type={type}
            onFocus={onFocusHandler}
            onBlur={onBlurHandler}
            onSelect={onSelectHandler}
            {...otherProps}
          />
          {isFocused && (
            <span
              style={{ left: `${carettePosition * 7}px` }}
              className={styles.carette}
            />
          )}
        </div>
      </div>
    );
  }
);
