export interface ComboboxProps<T> {
  className?: string;
  items: T[];
  value: string;
  onValueChange: (value: string) => void;
  placeholder?: string;
  notFound?: string;
  getLabel: (item: T) => string;
  getValue: (item: T) => string;
}