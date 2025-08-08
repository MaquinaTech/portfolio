// Consistent emoji/icon rendering wrapper to avoid baseline misalignment and blurry scaling.
// Uses an inline-flex square box with controlled font-size and line-height.
export default function IconEmoji({
  children,
  size = 32,
  className = ''
}) {
  const px = typeof size === 'number' ? `${size}px` : size
  return (
    <span
      aria-hidden="true"
      className={`inline-flex items-center justify-center select-none leading-none ${className}`}
      style={{ width: px, height: px, fontSize: px, lineHeight: '1', WebkitFontSmoothing: 'antialiased', transform: 'translateZ(0)' }}
    >
      {children}
    </span>
  )
}
