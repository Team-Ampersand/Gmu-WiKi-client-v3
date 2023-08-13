import { ButtonProps } from '@/types/components/common/ButtonProps'
import * as S from './style'

export default function Button({
  children,
  width,
  height,
  color,
  background,
  fontSize,
  fontWeight,
  border,
  borderRadius,
  hoverBackground,
  hoverBorder,
  hoverColor,
  onClick,
}: ButtonProps) {
  return (
    <S.Button
      width={width}
      height={height}
      fontSize={fontSize}
      color={color}
      background={background}
      border={border}
      borderRadius={borderRadius}
      fontWeight={fontWeight}
      hoverBackground={hoverBackground}
      hoverBorder={hoverBorder}
      hoverColor={hoverColor}
      onClick={onClick}
    >
      {children}
    </S.Button>
  )
}
