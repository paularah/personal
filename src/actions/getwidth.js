
import {Responsive} from 'semantic-ui-react'
function getWidth(){
    const isSSR = typeof window === 'undefined'
  
    return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth
}

export default getWidth