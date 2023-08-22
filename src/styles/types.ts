export type JustifyContentValues =
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'space-between'
  | 'space-around'
  | 'space-evenly';

export type AlignItemsValues =
  | 'stretch'
  | 'center'
  | 'flex-start'
  | 'flex-end'
  | 'baseline';

type FlexWrapValues = 'nowrap' | 'wrap' | 'wrap-reverse';

type FlexDirectionValues = 'row' | 'row-reverse' | 'column' | 'column-reverse';

export type FlexContainerProps = {
  flex?: number;
  flexDirection?: FlexDirectionValues;
  justifyContent?: JustifyContentValues;
  alignItems?: AlignItemsValues;
  alignSelf?: AlignItemsValues;
  flexWrap?: FlexWrapValues;
  marginTop?: number;
  marginBottom?: number;
  marginRight?: number;
  marginVertical?: number;
  marginHorizontal?: number;
  paddingHorizontal?: number;
  padding?: number;
  width?: string;
}

export type SpaceBetweenContainerProps = Omit<FlexContainerProps, 'alignItems' | 'justifyContent'>;

export type TextAlignValues = 'left' | 'right' | 'center' | 'justify';

export type FontWeightValues = 'bold' | 'normal';

type PositionValues = 'absolute' | 'relative' | 'fixed' | 'sticky';

export type BorderStyleValue = 'solid' | 'dotted' | 'dashed';

export type AlignTypes = {
  alignItems: string;
  width?: string;
}

export type TextProps = {
  fontSize?: number;
  marginTop?: number;
  marginLeft?: number;
}

export type BoldTextProps =
  TextProps &
  {
    marginBottom?: number;
    marginRight?: number;
    color?: string;
    textAlign?: TextAlignValues;
  }

export type ButtonProps = {
  backgroundColor?: string;
  width?: string;
  padding?: number;
  paddingLeft?: string;
  borderWidth?: number;
  borderColor?: string;
  disabled?: boolean;
}

export type IconButtonProps = Pick<ButtonProps, 'disabled'>;

export type ButtonTextProps = {
  color?: string;
  fontSize?: string;
  fontWeight?: FontWeightValues;
}

export type RoundedButtonProps = {
  backgroundColor?: string;
  disabled?: boolean;
  padding?: string;
  position?: PositionValues;
  top?: number;
  bottom?: number;
  right?: number;
  left?: number;
}

export type TextInputContainerProps = {
  width?: string;
  padding?: number;
  paddingHorizontal?: number;
  marginTop?: number;
  marginBottom?: number;
  marginLeft?: number;
  marginRight?: number;
  alignItems?: AlignItemsValues;
  justifyContent?: JustifyContentValues;
}
