import React, { Component } from 'react'
import ThemeContext from './themeContext';
import { connect } from './react-redux';

class ThemeSwitch extends Component {
  constructor() {
    super()
    this.state = { themeColor: '' }
  }

  componentDidMount() {
    this._updateThemeColor();
    const store = this.context;
    // subscribe the data change
    store.subscribe(() => this._updateThemeColor());
  }

  _updateThemeColor() {
    const store = this.context;
    const state = store.getState();
    this.setState({ themeColor: state.themeColor })
  }

  handleSwitchColor(color) {
    const store = this.context;
    store.dispatch({
      type: 'CHANGE_COLOR',
      themeColor: color
    })
  }

  render() {
    return (
      <div>
        <button
          style={{ color: this.state.themeColor }}
          onClick={this.handleSwitchColor.bind(this, 'red')}
        >
          Red
        </button>
        <button
          style={{ color: this.state.themeColor }}
          onClick={this.handleSwitchColor.bind(this, 'blue')}
        >
          Blue
        </button>
      </div>
    )
  }
}

ThemeSwitch.contextType = ThemeContext;

const mapStateToProps = (state) => {
  return {
    themeColor: state.themeColor
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSwitchColor: (color) => {
      dispatch({ type: 'CHANGE_COLOR', themeColor: color })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ThemeSwitch);
