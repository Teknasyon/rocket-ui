import type { TabItemVariant } from '../TabItem/common';

export type Tab = {
  id: string | number;
  variant?: TabItemVariant;
  label?: string;
  prependIcon?: string;
  appendIcon?: string;
  disabled?: boolean;
  active?: boolean;
};
