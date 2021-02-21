import styled from 'styled-components'

const Jobs = ({ posts }) => {
  return (
    <StyledJobsSection>
      <h2>Where i've Worked</h2>
      <div>
        {posts.map((frontMatter, i) => {
          const { date, title, company, location, range, url } = frontMatter

          return (
            <div key={i}>
              <div>{date}</div>
              <div>{title}</div>
              <div>{company}</div>
              <div>{location}</div>
              <div>{range}</div>
              <div>{url}</div>
              <div>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Doloribus, eos? Repellat provident ut blanditiis illum magnam,
                quisquam obcaecati cupiditate quaerat rem fugit, quos nisi, illo
                facere id dolorum eius accusamus.s
              </div>
            </div>
          )
        })}
      </div>
    </StyledJobsSection>
  )
}

export default Jobs

const StyledJobsSection = styled.section``
