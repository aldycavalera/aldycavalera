import css from '../../styles/modules/navbar.module.scss'
import NavbarItem from './NavbarItem'
import { useRouter } from "next/router"
import { CenteredColumn } from '../../components/Layouts'

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
const Navbar = () => {
  const router = useRouter();
  return (
    <>
      <header className={`bg-opacity-60 bg-gray-900 ${css.header}`}>
        <nav>
          {
            menu.map((item)=> (
              <NavbarItem active={router.pathname === item.url ? true : false} to={item.url}>{item.text}</NavbarItem>
            ))
          }
        </nav>
      </header>
    </>
  )
}
export default Navbar