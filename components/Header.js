import Link from 'next/link'
import styled from 'styled-components'

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
      name: 'Blog',
      url: '/blog',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ]

  return (
    <StyledHeader>
      <Link href="/">
        <StyledLogo>CRUZ-079</StyledLogo>
      </Link>
      <StyledNav>
        <ol>
          {navLinks.map(({ url, name }, i) => (
            <li key={i}>
              <Link href={url}>
                <a>{name}</a>
              </Link>
            </li>
          ))}
        </ol>
      </StyledNav>
    </StyledHeader>
  )
}

export default Header

const StyledHeader = styled.header`
  align-items: center;
  backdrop-filter: blur(10px);
  background-color: transparent;
  display: flex;
  font-family: var(--font-mono);
  font-size: var(--fz-xs);
  height: var(--nav-height);
  justify-content: space-between;
  left: 0;
  overflow: hidden;
  padding: 0px 3rem;
  position: fixed;
  top: 0;
  transition: var(--transition);
  width: 100%;
  z-index: 999;
`

const StyledNav = styled.nav`
  counter-reset: item 0;

  ol {
    display: flex;
    list-style: none;

    li {
      counter-increment: item 1;
      position: relative;

      a {
        padding: 1rem;
        transition: var(--transition);

        &:hover {
          color: var(--color-primary);
        }

        &:before {
          content: '0' counter(item) '.';
          color: var(--color-primary);
          margin-right: 0.4rem;
          text-align: right;
        }
      }
    }
  }
`

const StyledLogo = styled.a`
  color: var(--color-primary);
  cursor: pointer;
  font-size: var(--fz-md);
  padding: 0.2rem 0.5rem;
  transition: var(--transition);

  &:hover {
    color: var(--color-text);
  }
`
