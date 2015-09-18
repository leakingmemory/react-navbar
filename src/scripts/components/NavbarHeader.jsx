import React from 'react';
import Radium from 'radium';

@Radium
export default class NavbarHeader extends React.Component {
    displayName = 'Navigation bar header'

    static propTypes = {
        href:        React.PropTypes.string,
        name:        React.PropTypes.string,
        headerStyle: React.PropTypes.object,
        brandStyle:  React.PropTypes.object
    }

    getStyles = () => {
      return {
            header: {
                marginRight: '-15px',
                marginLeft: '-15px',
                boxSizing: 'border-box',

                '@media (min-width: 768px)': {
                    float: 'left',
                    marginRight: '0',
                    marginLeft: '0'
                }
            },
            brand: {
                float: 'left',
                height: '50px',
                padding: '15px',
                lineHeight: '20px',
                textDecoration: 'none',
                backgroundColor: 'transparent',

                fontSize: '18px',
                color: '#777',
                fontFamily: '"Helvetica Neue",Helvetica,Arial,sans-serif',

                ':hover': {
                    color: '#5e5e5e'
                },

                ':focus': {
                    color: '#5e5e5e'
                },

                '@media (min-width: 768px)': {
                    marginLeft: '-15px'
                }
            },
            navbarToggle: {
                position: 'relative',
                float: 'right',
                padding: '9px 10px',
                marginTop: '8px',
                marginRight: '15px',
                marginBottom: '8px',
                backgroundColor: 'transparent',
                backgroundImage: 'none',
                borderWidth: '1px',
                borderStyle: 'solid',
                borderRadius: '4px',
                borderColor: '#ddd',
                cursor: 'pointer',

                ':hover': {
                  backgroundColor: '#ddd'
                },

                ':focus': {
                  outline: '0',
                  backgroundColor: '#ddd'
                },
                '@media (min-width: 768px)': {
                  display: 'none'
                }
            },
            srOnly: {
                position: 'absolute',
                width: '1px',
                height: '1px',
                padding: '0',
                margin: '-1px',
                overflow: 'hidden',
                clip: 'rect(0, 0, 0, 0)',
                border: '0'
              },
            iconBar: {
                display: 'block',
                width: '22px',
                height: '2px',
                borderRadius: '1px',
                backgroundColor: '#888'
            },
            burger: {
              marginTop: '4px'
            }
        };
    }
    render() {
      const defStyle = this.getStyles();
      const {href, name, headerStyle, brandStyle} = this.props;
      return (
          <div key="header" style={[defStyle.header, headerStyle && headerStyle]}>
              <button type="button" style={[defStyle.navbarToggle]} >
                  <span style={[defStyle.srOnly]}>Toggle navigation</span>
                  <span style={[defStyle.iconBar]}></span>
                  <span style={[defStyle.iconBar, defStyle.burger]}></span>
                  <span style={[defStyle.iconBar, defStyle.burger]}></span>
              </button>
              <a key="brand" style={[defStyle.brand, brandStyle && brandStyle]} href={href}>
                  {name}
              </a>
          </div>
      );
    }
}
