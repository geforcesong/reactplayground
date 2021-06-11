import React, { Component } from 'react';
class Contact extends Component {

    state = {
        users: []
    }

    handleClick = () => {
        this.props.history.push('/about')
    }

    async componentDidMount() {
        const dataRes = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await dataRes.json();
        this.setState({
            users: data
        })
    }

    render() {

        const users = this.state.users;

        const userHTML = users && users.length ? (
            users.map((user) => {
                return (
                    <div key={user.id}>
                        <h3>Name: {user.name}</h3>
                        <h4>Email: {user.email}</h4>
                    </div>
                )
            })
        ) : (
            <h2>No users!</h2>
        );

        return (
            <div>
                <h1>This is Contact page</h1>
                <button onClick={this.handleClick}>Go to About</button>

                <br />
                {userHTML}
            </div >
        );
    }
}

export default Contact;
