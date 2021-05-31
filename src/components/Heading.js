import React from 'react'
import {
    Container,
    Header,
    Button, 
    Icon
} from 'semantic-ui-react';

import {Link} from 'react-router-dom'


const HomepageHeading = ({ mobile }) => (
<Container text >
                <Header
                as='h1'
                content='Paul Arah'
                inverted
                style={{
                    fontSize: mobile ? '2em' : '4em',
                    fontWeight: 'normal',
                    marginBottom: 0,
                    marginTop: mobile ? '1.5em' : '1em',
                }}
                />
                <Header
                as='h2'
                content='Software Developer  —  backend.'
                inverted
                style={{
                    fontSize: mobile ? '1.5em' : '1.7em',
                    fontWeight: 'normal',
                    marginTop: mobile ? '0.5em' : '1.0em',
                }}
                />
                <Link to='/blog'>
                    <Button as='a' inverted >
                    Blog
                    <Icon name='pencil alternate' style={{ marginLeft:'0.2em'}}/>
                    </Button>
                </Link>
                <a href='https://github.com/paularah' target="_blank" rel="noopener noreferrer">
                    <Button as='a' inverted style={{ marginLeft: '0.6em' }}>
                        Github
                        <Icon name='github' style={{ marginLeft:'0.2em'}}/>
                    </Button>
                </a>
                
            </Container>
)



  export default HomepageHeading;
  