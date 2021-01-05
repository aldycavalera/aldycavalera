import css from '../../styles/modules/navbar.module.scss'
import Link from 'next/link'

const NavbarItem = ({to, key, children, onClick, active=false}) => {
  return (
    <span key={key} className={`${css.item} ${active && css.active}`} onClick={onClick}>
      <Link href={to}>{children}</Link>
    </span>
  )
}
export default NavbarItem