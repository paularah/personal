import React from 'react'
import {
  Container,
  Divider,
  Grid,
  Header,
  List,
  Menu,
  Segment,
  Button,
  Icon
} from 'semantic-ui-react'

const FixedMenuLayout = () => (
  <div>
    <Menu fixed='top' inverted>
      <Container>
        <Menu.Item as='a' header>
          {/* <Image size='mini' src='/logo.png' style={{ marginRight: '1.5em' }} /> */}
          <Icon name='code' size='large' style={{ marginRight: '1.5em' }}/>
          Arah's musing
        </Menu.Item>
      </Container>
    </Menu>
 

    <Segment style={{ padding: '0em' }} vertical secondary>
      <Grid celled='internally' columns='equal' stackable>
        <Grid.Row textAlign='center'>
          <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
          <Header as='h3'>I hope pen down all things software, life, experiences and sometimes random musings 
          you should probably not take too seriously here.</Header>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
    <Container text style={{ marginTop: '7em' }}>
    
      <Header as='h4' style={{ fontSize: '1.33em' }}>
          Remote development docker containers
        </Header>
        <p style={{ fontSize: '1em' }}>
        You're on a team consisting of several web developer (frontend and backend), UI/UX designer, 
        dev-ops engineers, product managers and any other role I have missed. Imagine the UX designer wants to explore the product
        and see how every thing fits together.....
        </p>
        <Button as='a' size='medium'>
          Coming Soon
        </Button>
        <Divider
          as='h4'
          className='header'
          horizontal
          style={{ margin: '3em 0em', textTransform: 'uppercase' }}
        >
          <p>.</p>
        </Divider>
        <Divider
          as='h4'
          className='header'
          horizontal
          style={{ margin: '3em 0em', textTransform: 'uppercase' }}
        >
          <p></p>
        </Divider>
        <Divider
          as='h4'
          className='header'
          horizontal
          style={{ margin: '3em 0em', textTransform: 'uppercase' }}
        >
          <p></p>
        </Divider>
        <Divider
          as='h4'
          className='header'
          horizontal
          style={{ margin: '3em 0em', textTransform: 'uppercase' }}
        >
          <p></p>
        </Divider>
        <Divider
          as='h4'
          className='header'
          horizontal
          style={{ margin: '3em 0em', textTransform: 'uppercase' }}
        >
          <p></p>
        </Divider>
        <Divider
          as='h4'
          className='header'
          horizontal
          style={{ margin: '3em 0em', textTransform: 'uppercase' }}
        >
          <p></p>
        </Divider>
        <Divider
          as='h4'
          className='header'
          horizontal
          style={{ margin: '3em 0em', textTransform: 'uppercase' }}
        >
          <p></p>
        </Divider>
        <Divider
          as='h4'
          className='header'
          horizontal
          style={{ margin: '3em 0em', textTransform: 'uppercase' }}
        >
          <p></p>
        </Divider>

        

     

    </Container>

    <Segment inverted vertical style={{ margin: '5em 0em 0em', padding: '5em 0em' }}>
      <Container textAlign='center'>
        <Grid divided inverted stackable>
        </Grid>

        <Divider inverted section />
        <Icon name='code' size='large'></Icon>
        <List horizontal inverted divided link size='small'>
          <List.Item as='a' href='#'>
            Home
          </List.Item>
          <List.Item as='a' href='#'>
          <Icon name='github'/>
                <a href='https://github.com/paularah' target="_blank" rel="noopener noreferrer">Paul Arah</a>
          </List.Item>
          <List.Item as='a' href='#'>
          <Icon name='envelope outline'/>
                <a href='mailto:albarnorth03@gmail.com' target="_blank" rel="noopener noreferrer">albarnorth03@gmail.com</a>
          </List.Item>
          <List.Item as='a' href='#'>
          <Icon name='phone'/>
                <a href='tel:555-555-5555' target="_blank" rel="noopener noreferrer">+250787691717</a>
          </List.Item>
        </List>
      </Container>
    </Segment>
  </div>
)

export default FixedMenuLayout