import styled from 'styled-components'

const Jobs = ({ jobsData }) => {
  return (
    <StyledJobsSection>
      <h2>Where i've Worked</h2>

      <div>
        <StyledTabList>
          {jobsData &&
            jobsData.map((post, i) => (
              <li key={i}>
                <StyledTabButton>
                  <span>{post.title}</span>
                </StyledTabButton>
              </li>
            ))}
        </StyledTabList>

        <StyledTabContent>
          <h3>
            <span>Title</span>
            <span>
              &nbsp;@&nbsp;
              <a href="/">Company</a>
            </span>
          </h3>
          <p>Here come your range</p>

          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. A animi
            nesciunt officia excepturi harum? Sint nesciunt aliquam nostrum?
            Adipisci veritatis, vel enim atque rerum omnis dolor blanditiis
            explicabo fugit accusamus!
          </p>
        </StyledTabContent>
      </div>
    </StyledJobsSection>
  )
}

export default Jobs

const StyledJobsSection = styled.section``

const StyledTabList = styled.ul``

const StyledTabButton = styled.button``

const StyledTabContent = styled.div``
