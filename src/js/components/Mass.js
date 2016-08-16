import React from 'react'

//styles
import style from '../../sass/style'
import font from 'font-awesome-webpack'

//Const
import { WHITE, BLACK, NON } from '../reducers/gomokuApp'

class Mass extends React.Component{
  render(){
    return(
        <span className={ style.mass } >
          <i className={ style.white } aria-hidden="true"></i>
        </span>
    )
  }

}

export default Mass
