import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ThemeSwitch from './ThemeSwitch'
import { connect } from './react-redux'

class Content extends Component {
  constructor() {
    super()
    this.state = { themeColor: '' };
  }

  render() {
    return (
      <div>
        <p style={{ color: this.props.themeColor }}>Content</p>
        <ThemeSwitch />
      </div>
    )
  }
}

Content.propTypes = {
  store: PropTypes.object,
}

/**
 * what data you exactly need
 * @param {*} state 
 */
const mapStateToProps = (state) => {
  return {
    themeColor: state.themeColor
  }
}
Content = connect(mapStateToProps)(Content)

export default Content;
