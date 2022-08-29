
import React, { Component } from 'react'
const {Provider, Consumer} = React.createContext()


class UserNameContextProvider extends Component {
  state = {
    theme: true
  }

  toggleTheme = () => {
    this.setState(prevState => {
      return {
        theme: !prevState.theme
      }
    })
  }
  
  render() {

    return (
      <Provider 
        value={{
          theme: this.state.theme,
          toggleTheme: this.toggleTheme
        }}
      >
        {this.props.children}
      </Provider>
    )
  }
}
export {UserNameContextProvider, Consumer as UserNameContextConsumer}