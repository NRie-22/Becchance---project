import { HTMLProps } from 'react';
import styled, { CSSProperties } from 'styled-components';
import {
  alignItems,
  background,
  border,
  borderRadius,
  bottom,
  boxShadow,
  color,
  display,
  flexDirection,
  flexGrow,
  flexWrap,
  gridTemplateColumns,
  height,
  justifyContent,
  left,
  margin,
  maxWidth,
  minHeight,
  order,
  overflow,
  padding,
  position,
  ResponsiveValue,
  right,
  space,
  top,
  typography,
  width,
  zIndex,
} from 'styled-system';

type CustomStyledProps = HTMLProps<HTMLDivElement> & {
  flexDirection?: CSSProperties['flexDirection'];
  justifyContent?: CSSProperties['justifyContent'];
  alignItems?: CSSProperties['alignItems'];
  flexWrap?: CSSProperties['flexWrap'];
  flexGrow?: CSSProperties['flexGrow'];
  background?: CSSProperties['background'];
  border?: CSSProperties['border'];
  borderRadius?: CSSProperties['borderRadius'];
  bottom?: CSSProperties['bottom'];
  boxShadow?: CSSProperties['boxShadow'];
  color?: CSSProperties['color'];
  display?: CSSProperties['display'];
  gridTemplateColumns?:
    | CSSProperties['gridTemplateColumns']
    | Array<CSSProperties['gridTemplateColumns']>;
  height?: CSSProperties['height'];
  left?: CSSProperties['left'];
  margin?: CSSProperties['margin'] | Array<CSSProperties['margin']>;
  overflow?: CSSProperties['overflow'];
  padding?: CSSProperties['padding'] | Array<CSSProperties['padding']>;
  position?: CSSProperties['position'];
  right?: CSSProperties['right'];
  space?: ResponsiveValue<string | number>;
  top?: CSSProperties['top'];
  typography?: CSSProperties['fontSize'] | CSSProperties['fontWeight'] | string;
  width?: CSSProperties['width'];
  zIndex?: CSSProperties['zIndex'];
  maxWidth?: CSSProperties['maxWidth'] | Array<CSSProperties['maxWidth']>;
  order?: CSSProperties['order'] | Array<CSSProperties['order']>;
  gap?: ResponsiveValue<string | number>;
  minHeight?: CSSProperties['minHeight'] | Array<CSSProperties['minHeight']>;
};

export const Box = styled.div.withConfig({
  shouldForwardProp: (prop) =>
    ![
      'flexDirection',
      'justifyContent',
      'alignItems',
      'flexWrap',
      'flexGrow',
      'gridTemplateColumns',
      'width',
      'height',
      'maxWidth',
      'minHeight',
      'gap',
      'borderRadius',
      'position',
      'top',
      'left',
    ].includes(prop),
})<CustomStyledProps>(
  width,
  maxWidth,
  height,
  minHeight,
  space,
  padding,
  margin,
  color,
  typography,
  display,
  border,
  borderRadius,
  boxShadow,
  background,
  overflow,
  position,
  top,
  bottom,
  left,
  right,
  zIndex,
  order
);

export const FlexBox = styled(Box)`
  display: flex;
  gap: ${(props) => props.gap};
  ${flexDirection};
  ${justifyContent};
  ${alignItems};
  ${flexWrap};
  ${flexGrow};
  ${space};
  ${margin};
  ${top};
  ${left};
  ${position};
  ${height};
  ${width};
`;

export const AbsoluteBox = styled(Box)`
  position: absolute;
  ${position};
  ${top};
  ${bottom};
  ${left};
  ${right};
`;

export const FlexBoxAbsolute = styled(AbsoluteBox)`
  display: flex;
  ${flexDirection};
  ${justifyContent};
  ${alignItems};
`;

export const GridColumns = styled(Box)`
  display: grid;
  ${gridTemplateColumns};
  gap: ${(props) => props.gap};
  ${space};
`;

export const Text = styled.p`
  ${color};
  ${margin};
  ${typography};
`;

export const Button = styled.button<CustomStyledProps>`
  ${width}
  ${space}

  :disabled,
  :hover {
  }

  :disabled {
  }
`;
