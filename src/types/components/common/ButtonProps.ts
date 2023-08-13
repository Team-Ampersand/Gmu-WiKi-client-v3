export interface ButtonProps {
  children: React.ReactNode
  width: string
  height: string
  fontSize?: string
  color?: string
  background?: string
  border?: string
  borderRadius?: string
  fontWeight?: string
  hoverBackground?: string
  hoverBorder?: string
  hoverColor?: string
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}
