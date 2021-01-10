import css from '../../styles/modules/navbar.module.scss'
import HeaderItem from './HeaderItem'
import { useRouter } from "next/router"
import { Menu } from 'react-feather';
import { useState } from 'react'
import { isMobile } from 'react-device-detect';
import { Transition } from '@headlessui/react'

const menu = [
  {
    text: 'Home',
    url: '/'
  },
  {
    text: 'About',
    url: '/about'
  },
  {
    text: 'Works',
    url: '/works'
  },
  {
    text: 'Thoughts',
    url: '/thoughts'
  }
]
const Header = () => {
  const router = useRouter();
  const currentRoute = router.pathname.split('/')[1]

  const [menuState, setMenu] = useState(!isMobile);

  const toggleMenu = () => {
    setMenu(!menuState)
  }

  return (
    <>
      <header className={`bg-opacity-60 bg-gray-200 dark:bg-gray-900 transition-all duration-300 pb-12 lg:pb-2 max-h-60 lg:max-h-20 ${css.header}`}>
        <button onClick={()=> toggleMenu()} className="absolute z-50 flex lg:hidden left-5 top-4">
          <Menu></Menu>
          <span className="ml-3 capitalize">{ currentRoute }</span>
        </button>
        <Transition 
          as="nav"
          show={menuState}
          enter="transition-opacity duration-75"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity duration-150"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
          className="block mt-12 lg:mt-0 lg:grid lg:justify-center"
          >
          {
            menu.map((item, index)=> (
              <div key={index} className="contents">
                <HeaderItem active={`/${currentRoute}` === item.url ? true : false} to={item.url}>{item.text}</HeaderItem>
              </div>
            ))
          }
        </Transition>
      </header>
    </>
  )
}
export default Header