import styled from 'styled-components'
import Link from 'next/link'
import { Button, Heading, Paragraph, Spacer } from '@/styles/index'

const StyledHeroSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  min-height: 100vh;
  width: 100%;
`
const Container = styled.div``

const Hero = () => {
  const data = {
    greeting: 'Hi, my name is',
    title: 'William Cruz.',
    subTitle: 'I build things for the web.',
    content:
      "I'm a Front-end and JavaScript developer based in Switzerland, Basel specializing in building and designing exceptional websites, applications, and everything in between.",
    email: 'me@williamcruz.ch',
    btnText: 'Get In Touch',
  }
  const { greeting, title, subTitle, content, email, btnText } = data

  return (
    <StyledHeroSection>
      <Container>
        <Paragraph color="primary">{greeting}</Paragraph>
        <Spacer size={20} />
        <Heading level={1} className="hero-heading">
          {title}
        </Heading>
        <Heading level={2} className="hero-heading">
          {subTitle}
        </Heading>
        <Spacer size={40} />
        <Paragraph maxW={40}>{content}</Paragraph>
        <Spacer size={40} />
        <Link href={`mailto:${email}`}>
          <Button>{btnText}</Button>
        </Link>
      </Container>
    </StyledHeroSection>
  )
}

export default Hero
