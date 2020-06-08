import * as R from "ramda";

import { HTML_ATTRIBUTES, CSS_PROPS, CSS_ALIAS_MAP } from "./constants";
import { ElementProps, PropType } from "./types";

export const pickDataAttrs = R.pickBy((_, key: string) =>
  R.test(/^data-.+/, key)
);

export const pickAllowedAttrs = R.pick([...HTML_ATTRIBUTES, ...CSS_PROPS]);

export const cssAliasProps = R.keys(CSS_ALIAS_MAP) as (keyof ElementProps)[];

export const resolveAlias = (props: ElementProps): ElementProps => {
  const resolvedShorthandProps = R.reduce(
    (map, value) =>
      R.when(
        () => !R.isNil(props[value]),
        R.assoc(CSS_ALIAS_MAP[value], props[value] as PropType)
      )(map),
    {},
    cssAliasProps
  );

  return R.mergeRight(props, resolvedShorthandProps);
};

export const parseValue = (
  theme: any,
  device: string,
  value: PropType
): string =>
  R.cond<any, string>([
    [R.isNil, R.identity],
    [R.is(Boolean), () => `${theme.gridSize}px`],
    [R.is(Number), (num: number) => `${theme.gridSize * num}px`],
    [R.is(Function), (fn: Function) => parseValue(theme, device, fn(theme))],
    [
      R.is(Object),
      R.pipe(R.prop(device), (v) => parseValue(theme, device, v as PropType)),
    ],
    [R.T, String],
  ])(value);

export const parseValues = (theme: any, device: string) =>
  R.mapObjIndexed((value: PropType, prop: string) => {
    if (!R.includes(prop, [...CSS_PROPS, ...cssAliasProps])) {
      return value;
    }
    return parseValue(theme, device, value);
  });
