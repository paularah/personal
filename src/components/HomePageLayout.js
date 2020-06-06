import React from 'react'
import {
  Container,
  Divider,
  Grid,
  Image,
  Segment,
  Header,
  Icon
} from 'semantic-ui-react'
import ResponsiveContainer from './Responsive';



const HomepageLayout = () => (
  <ResponsiveContainer>

<Segment style={{ padding: '5em 0em' }} vertical>
      <Grid container stackable verticalAlign='middle'>
          <Grid.Column width={8}>
           <Container text>
           
           <p style={{ fontSize: '1.33em' }}>
              I am a software developer 
            </p>
            <Divider
          as='h4'
          className='header'
          horizontal
          style={{ margin: '3em 0em', textTransform: 'uppercase' }}
        >
          <a href='/'>Skills</a>
        </Divider>
            <p style={{ fontSize: '1.33em' }}>
              I am primarily focused on the backend stack. I am skilled with Node.js, Typescript, JavaScript, MongoDB, PostgreSQL, Redis, Docker, Nginx and AWS.
              I have a working knowlegde of basic Dev-Ops principles and tools needed to navigate the backend both as a sole developer and in a team.  
            </p>
           </Container>
          </Grid.Column>
          <Grid.Column floated='right' width={4}>
          <Image src='/arah.jpg' size='medium' circular disabled/>
          </Grid.Column>
      </Grid>
    </Segment>
    <Segment style={{ padding: '7em 0em' }} vertical>
      <Container text>
        <p style={{ fontSize: '1.33em' }}>
          Arah is a software developer 
        </p>
      </Container>
    </Segment>

    <Segment inverted vertical style={{ minHeight: 300, padding: '1em 0em' }}>
      <Container text  style={{
                    fontWeight: 'normal',
                    marginBottom: 0,
                    marginTop:'3em',
                }}>
        <Header as='h2' inverted textAlign="center" >
          Get in touch
        </Header>
      </Container>
      <Container style={{
                    fontWeight: 'bold',
                    marginBottom: 0,
                    marginTop:'1.5em',
                }}>
      <Grid divided inverted stackable verticalAlign='middle'>
          <Grid.Row>
            <Grid.Column width={5} size='massive'>
              <Container text>
              <Icon name='phone'/>
              <a href='tel:555-555-5555' target="_blank" rel="noopener noreferrer">+250787691717</a>
              </Container>
            </Grid.Column>
            <Grid.Column width={5}>
            <Container text>
              <Icon name='envelope outline'/>
              <a href='mailto:albarnorth03@gmail.com' target="_blank" rel="noopener noreferrer">albarnorth03@gmail.com</a>
              </Container>
            </Grid.Column>
            <Grid.Column width={5}>
            <Container text>
              <Icon name='github'/>
              <a href='https://github.com/paularah' target="_blank" rel="noopener noreferrer">Paul Arah</a>
              </Container>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
  </ResponsiveContainer>
)

export default HomepageLayout