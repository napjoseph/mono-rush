export interface DividerLogoConfig {
  className?: string;
  fill?: string;
}

export const DEFAULT_DIVIDER_LOGO_CONFIG: DividerLogoConfig = {
  className: 'h-8 w-8 text-gray-500',
  fill: '#a8abaf'
};

export interface DividerConfig {
  logo: DividerLogoConfig;
}

export const DEFAULT_DIVIDER_CONFIG: DividerConfig = {
  logo: DEFAULT_DIVIDER_LOGO_CONFIG
};
