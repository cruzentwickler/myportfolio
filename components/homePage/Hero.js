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
const Container = styled.div`
  max-width: ${({ maxW }) => maxW};
  display: grid;
  grid-gap: 1.2rem;
  justify-items: start;
`

const Hero = () => {
  const data = {
    title: 'William Cruz',
    subTitle: 'I build things for the web.',
    greeting: 'Hi, my name is',
    content:
      "I'm a Front-end Java Script and React developer based in Switzerland, Basel, specializing in building and designing exceptional websites, applications, and everything in between.",
    email: 'me@williamcruz.ch',
    btnText: 'Get In Touch',
  }
  const { greeting, title, subTitle, content, email, btnText } = data

  return (
    <StyledHeroSection>
      <Container>
        <Paragraph color="primary">{greeting}</Paragraph>
        <Heading level="1" color="var(--color-white)">
          {title}
        </Heading>
        <Heading level="2">{subTitle}</Heading>
        <Paragraph maxW="30rem">{content}</Paragraph>
        <Spacer size={16} />
        <Link href={`mailto:${email}`}>
          <Button>{btnText}</Button>
        </Link>
      </Container>
    </StyledHeroSection>
  )
}

export default Hero
