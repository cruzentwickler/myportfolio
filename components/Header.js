import Link from 'next/link'

const Header = () => {
  const navLinks = [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Work',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ]

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
