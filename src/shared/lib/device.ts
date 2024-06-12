export const deviceDetection = () => {
  const { matchMedia } = window

  const isMobile = matchMedia('(max-width: 767px)').matches
  const isTablet = matchMedia('(max-width: 1023px)').matches
  const isDesktopMin = matchMedia('(max-width: 1439px)').matches
  const isDesktop = matchMedia('(min-width: 1440px)').matches

  if (isMobile) return 'mobile'
  if (isTablet) return 'tablet'
  if (isDesktopMin) return 'desktop-min'
  if (isDesktop) return 'desktop'

  return undefined
}
