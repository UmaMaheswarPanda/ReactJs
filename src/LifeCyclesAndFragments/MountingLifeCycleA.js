import React, { Component } from 'react'
import MountingLifeCycleB from './MountingLifeCycleB';

class MountingLifeCycleA extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: 'Mounting LifeCycleA'
        }
        console.log('LifeCycle A constructor');
    }

    static getDerivedStateFromProps(props, state){
        console.log('LifeCycle A getDerivedFromProps');
        return null
      
    }

    componentDidMount(){
        console.log('LifeCycle A componentDidMount');

    }

    shouldComponentUpdate(){
      console.log('LifeCycle A shouldComponentUpdate');
      return true
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
      console.log('LifeCycle A getSnapshotBeforeUpdate');
      return null

    }

    componentDidUpdate(){
      console.log('LifeCycle A componentDidUpdate');
    }
    changeState=() =>{
      this.setState({
        name:'Mounting LifeCycleA Change State'
      })
    }

  render() {
    console.log('Lifecycle A render')
    return (
      <div>
        <div>Lifecycle A</div>
        <button onClick={this.changeState}>Change state</button>
        <MountingLifeCycleB/>
      </div>
    )
  }
}
export default MountingLifeCycleA;
