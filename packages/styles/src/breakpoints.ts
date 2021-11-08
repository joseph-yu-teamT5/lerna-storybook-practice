export enum contentWidth {
  L = '1000px',
  M = '800px',
  S = '620px',
  XS = '315px',
}

export enum breakpoints {
  XL = 1440,
  L = 1280,
  M = 1024,
  S = 768,
  XS = 576,
  XXS = 375,
}

export const mq = {
  min1440: `min-width: ${breakpoints.XL}px`,
  min1280: `min-width: ${breakpoints.L}px`,
  min1024: `min-width: ${breakpoints.M}px`,
  min768: `min-width: ${breakpoints.S}px`,
  min576: `min-width: ${breakpoints.XS}px`,
  min375: `min-width: ${breakpoints.XXS}px`,
  max1440: `max-width: ${breakpoints.XL - 1}px`,
  max1280: `max-width: ${breakpoints.L - 1}px`,
  max1024: `max-width: ${breakpoints.M - 1}px`,
  max768: `max-width: ${breakpoints.S - 1}px`,
  max576: `max-width: ${breakpoints.XS - 1}px`,
  max375: `max-width: ${breakpoints.XXS - 1}px`,

  wBetween: (max: number, min: number): string => {
    return `@media screen and (min-width: ${min}px) and (max-width: ${max}px)`
  },
  hover: '@media (hover: hover)',
}

export default breakpoints
