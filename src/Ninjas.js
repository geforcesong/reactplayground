import React, { Component } from 'react';

class Ninjas extends Component {
    render() {
        const { ninjas } = this.props;
        const ninjaList = ninjas.map((ninja) => {
            return (
                <div className="ninja" key={ninja.id}>
                    <div>Name: {ninja.name}</div>
                    <div>Age: {ninja.age}</div>
                    <div>Belt: {ninja.belt}</div>
                    <button onClick={() => { this.props.delteNinja(ninja.id) }}>Delete</button>
                    <br />
                </div>
            )
        })

        return (<div className="ninja">
            <h2>Class Component</h2>
            {ninjaList}
        </div>);
    }
}

export default Ninjas;
