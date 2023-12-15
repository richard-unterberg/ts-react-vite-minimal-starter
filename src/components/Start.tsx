import { MagnetIcon } from 'lucide-react'

import useAppTheme from '@/lib/useTheme'

const Start = () => {
  const { color, spacing } = useAppTheme()

  return (
    <div className="container px-5 mx-auto text-white text-base text-center">
      <MagnetIcon color={color('success')} size={spacing(20)} className="my-10 mx-auto" />
      <h1 className="text-3xl">Some Component</h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam itaque asperiores consectetur
        fuga libero consequuntur maxime voluptas iure dolor, iste non provident sequi molestias
        consequatur, eaque similique dolore.
      </p>
    </div>
  )
}

export default Start
