import { LucideProps } from 'lucide-react'
import { Suspense, lazy } from 'react'

import { ICON_ID } from '@/lib/icons/iconID'

const LazyIcon = lazy(() => import('@/lib/icons/LazyIcon'))

interface AppIconProps extends LucideProps {
  icon: ICON_ID
}

const Icon = ({ icon, ...props }: AppIconProps) => {
  if (icon) {
    return (
      <Suspense>
        <LazyIcon icon={icon} {...props} />
      </Suspense>
    )
  }
  return null
}

export default Icon
