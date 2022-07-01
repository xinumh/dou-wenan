import React, { MouseEventHandler } from 'react'
import classNames from 'classnames'

// const svgs = import.meta.globEager('@/assets/icon/*.svg')
// console.log('svgs', svgs)
// Object.keys(svgs).forEach((key) => console.log('key', key))

type IIconProps = {
  width?: number
  height?: number
  color?: string
  name: string
  className?: string
  onClick?: (event: React.MouseEvent) => void
}
const IconSvg = ({
  name,
  color,
  className,
  width = 20,
  height = 20,
  onClick
}: IIconProps): JSX.Element => {
  const symbolId = `#icon-${name}`
  const svgCls = classNames('svg-icon', className)

  return (
    <svg
      className={svgCls}
      onClick={(event) => onClick?.(event)}
      aria-hidden='true'
      style={{ width, height }}
    >
      <use xlinkHref={symbolId} fill={color} />
    </svg>
  )
}

export default IconSvg
