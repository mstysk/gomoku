import React from 'react'

//styles
import style from '../../sass/style'

//components
import Mass from './Mass'
import White from './White'
import Black from './Black'

//Contents
import {WHITE, BLACK, NON } from '../reducers/gomokuApp'


class Row extends React.Component{

  getMass(mass, x, y) {
    switch(mass){
      case WHITE:
        return ( 
          <span className={ style.mass } key={x + y}>
            <White x={x} y={y} /> 
          </span> )
      case BLACK:
        return ( 
          <span className={ style.mass } key={x + y}>
            <Black x={x} y={y} />
          </span> )
      default:
        return ( <span className={ style.mass } key={x + y} onClick={this.props.onPut.bind(this,x, y)}> </span>)
    }
  }

  render(){
    return (
        <div className={ style.board }>
        {this.props.row.map((mass, x) => {
          return this.getMass(mass, x, this.props.y)
        })}
        </div>
    )
  }
}

export default Row
