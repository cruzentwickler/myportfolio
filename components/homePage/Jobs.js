import styled from 'styled-components'

const Jobs = ({ posts }) => {
  return (
    <StyledJobsSection>
      <h2>Where i've Worked</h2>
      <ul>
        {posts.map((post, i) => (
          <li key={i}>
            <a href="/">{post.title}</a>
          </li>
        ))}
      </ul>
    </StyledJobsSection>
  )
}

export default Jobs

const StyledJobsSection = styled.section``
