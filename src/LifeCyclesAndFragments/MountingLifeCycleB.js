import React, { Component } from 'react'

class MountingLifeCycleB extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: 'Mounting LifeCycleB'
        }
        console.log('LifeCycle B constructor');
    }

    static getDerivedStateFromProps(props, state){
        console.log('LifeCycle B getDerivedFromProps');
        return null;
    }

    componentDidMount(){
        console.log('LifeCycle B componentDidMount');

    }
    shouldComponentUpdate(){
        console.log('LifeCycle B shouldComponentUpdate');
        return true
      }
  
      getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('LifeCycle B getSnapshotBeforeUpdate');
        return null;
  
      }
  
      componentDidUpdate(){
        console.log('LifeCycle B componentDidUpdate');
      }


  render() {
    console.log('Lifecycle B render')
    return (
      <div>
        Lifecycle B
       
      </div>
    )
  }
}
export default MountingLifeCycleB;
