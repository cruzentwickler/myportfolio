import styled from 'styled-components'

const Projects = ({ posts }) => {
  return (
    <StyledProjectsSection>
      <h2>Projects</h2>
      <ul>
        {posts.map((post, i) => (
          <li key={i}>
            <a href="/">{post.title}</a>
          </li>
        ))}
      </ul>
    </StyledProjectsSection>
  )
}

export default Projects

const StyledProjectsSection = styled.section``
