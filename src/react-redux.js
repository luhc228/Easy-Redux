import React, { Component } from 'react';
import ThemeContext from './themeContext';

export const connect = (mapStateToProps, mapDispatchToProps) => (WrappedComponent) => {
  class Connect extends Component {
    constructor() {
      super()
      this.state = { allProps: {} }
    }

    componentWillMount() {
      const store = this.context
      this._updateProps()
      store.subscribe(() => this._updateProps())
    }

    _updateProps() {
      const store = this.context
      let stateProps = mapStateToProps ?
        mapStateToProps(store.getState(), this.props) : {}
      let dispatchProps = mapDispatchToProps
        ? mapDispatchToProps(store.dispatch, this.props) : {}

      console.log(this.props)
      this.setState({
        allProps: {
          ...stateProps,
          ...dispatchProps,
          ...this.props
        }
      })
    }

    render() {
      return <WrappedComponent {...this.state.allProps} />
    }
  }

  Connect.contextType = ThemeContext;

  return Connect;
}
