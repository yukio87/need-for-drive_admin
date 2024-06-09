declare module '*module.scss' {
  const styles: { [key: string]: string }
  export default styles
}

declare module '*.png' {
  const value: string
  export = value
}

declare module '*.jpg'

declare module '*.jpeg'

declare module '*.svg' {
  import React from 'react'

  const SVG: React.VFC<React.SVGProps<SVGSVGElement>>
  export default SVG
}
