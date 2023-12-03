import React from 'react';
import Dog from './dog';
import { connect } from 'react-redux'

const DogList = props  => {
    const { dogs } = props;

        return (<div id="dogList"> 
        {
            dogs.map(gif => {
                return(<Dog dog={dog}/>);
            })
        }
    </div>);
    }

const mapStateToProps = state => {
    dog: state.dog
}

export default connect(mapStateToProps)(DogList);

  