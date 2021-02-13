import Link from 'next/link'

const Header = () => {
  return (
    <header className="full-bleed">
      <nav>
        <ul>
          <li>
            <Link href="/">
              <a>Link One</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>Link Two</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>Link Three</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>Link Four</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
