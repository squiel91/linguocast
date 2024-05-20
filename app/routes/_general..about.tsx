
import React from 'react'

const About = () => (
  <>
    <h1 className='text-4xl font-bold mb-8'>About Linguocast</h1>
    <div className='max-w-2xl'>
      <p>
        Open source, community mantained comprehensive podcast's directory to boost your listening commprehension and vocablary in any language.
        The long term vision is to create the platform for language learners content creators to distrubute and monetize their content. listen to podcast and video podcast to boost owned by the community
      </p>
      <p>
        In the pipeline:
      </p>
      <ul>
        <li>
          Add advanced filters
        </li>
        <li>
          <ul>
            <li>
              Add database (possibly initially SQLite)
              <ul>
                <li>
                  Connect to RSS
                  <ul>
                    <li>automatically set/update number of episodes, last episode date, is active, etc.</li>
                    <li>Show episodes and listen to them</li>
                  </ul>
                </li>
                <li>
                  Add user creation/authentication
                  <ul>
                    <li>Add reviews/comment system with a 1 to 5 starts</li>
                    <li>Add reputation for the users who uploades</li>
                  </ul>
                </li>
                <li>Create new podcasts</li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          Improve design
        </li>
        <li>
          Improve SEO
        </li>
        <li>
          Create Progressive web App
        </li>
      </ul>
      <p>
        For developers:
        The platform is made in Typescript+React+Remix+Tailwind, hosted in Vercel (for now).
      </p>
    </div>
  </>
)

export default About
