import Image from 'next/image'
import styled from 'styled-components'

const About = () => {
  const skills = [
    'JavaScript (ES6+)',
    'HTML and (S)CSS',
    'React',
    'Node.js',
    'WordPress',
  ]

  return (
    <StyledAboutSection>
      <h2>About Me</h2>

      <div>
        <div>
          <p>
            Hello! I'm William Cruz, a Front-end and JavaScript developer based
            in Switzerland, Basel
          </p>
          <p>
            I enjoy creating things that live on the internet, whether that be
            websites, applications, or anything in between. My goal is to always
            build products that provide pixel-perfect, performant experiences.
          </p>
          <p>Here are a few technologies I've been working with recently:</p>
        </div>
        <ul>
          {skills &&
            skills.map((skill, i) => {
              return <li key={i}>{skill}</li>
            })}
        </ul>
      </div>
      <div>
        <Image src="/static/images/avatar.jpg" height={500} width={500} />
      </div>
    </StyledAboutSection>
  )
}

export default About

const StyledAboutSection = styled.section``
