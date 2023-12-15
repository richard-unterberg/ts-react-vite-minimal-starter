import { LucideProps } from 'lucide-react'

import { ICON_ID } from '@/lib/icons/iconID'
import APP_ICON from '@/lib/icons/iconMap'
import { useMemo } from 'react'

interface LazyIconIconProps extends LucideProps {
  icon: ICON_ID
}

const LazyIcon = ({ icon, ...props }: LazyIconIconProps) => {
  const AppIconComponent = useMemo(() => APP_ICON[icon].component ?? null, [icon])

  if (AppIconComponent) {
    return <AppIconComponent {...props} />
  }
  return null
}

export default LazyIcon
