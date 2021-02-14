import Link from 'next/link'
import { navLinks } from '@/config/index'

const Header = () => {
  return (
    <header className="full-bleed">
      <nav>
        <ul>
          {navLinks.map(({ url, name }, i) => (
            <li key={i}>
              <Link href={url}>
                <a>{name}</a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Header
