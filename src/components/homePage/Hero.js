import styled from 'styled-components'
import Link from 'next/link'
import { email } from '@/config/index'

const Hero = () => {
  return (
    <StyledHeroSection>
      <h1>Hi, my name is</h1>
      <h2>William Cruz</h2>
      <h3 className="big-heading">I build things for the web.</h3>
      <p>
        I'm a software engineer based in Boston, MA specializing in building
        (and occasionally designing) exceptional websites, applications, and
        everything in between.
      </p>
      <Link href={`mailto:${email}`}>
        <a>Get In Touch</a>
      </Link>
    </StyledHeroSection>
  )
}

export default Hero

const StyledHeroSection = styled.section``
