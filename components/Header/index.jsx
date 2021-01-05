import css from '../../styles/modules/navbar.module.scss'
import HeaderItem from './HeaderItem'
import { useRouter } from "next/router"

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
  return (
    <>
      <header className={`bg-opacity-60 bg-gray-900 ${css.header}`}>
        <nav>
          {
            menu.map((item, index)=> (
              <div key={index}>
                <HeaderItem active={`/${currentRoute}` === item.url ? true : false} to={item.url}>{item.text}</HeaderItem>
              </div>
            ))
          }
        </nav>
      </header>
    </>
  )
}
export default Header