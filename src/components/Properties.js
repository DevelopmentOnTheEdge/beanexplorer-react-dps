import React from 'react';
import PropTypes from 'prop-types';
import Property from './Property';


class Properties extends React.Component {
  render() {
    let fields = this.props.bean.order.map((path, i) => {
      if (this.props.ids === undefined || this.props.ids.includes(i)) {
        return (
          <Property {...this.props} path={path} key={path}/>
        )
      } else {
        return null;
      }
    });

    //todo remove outer element after migrate to react 16.2
    return <div className={this.props.rowClass}>{fields}</div>;
  }

}

Properties.defaultProps = {
  rowClass: "form-row",
};

Properties.propTypes = {
  rowClass: PropTypes.string,
  bean: PropTypes.object.isRequired,
  ids: PropTypes.array,
  inline: PropTypes.bool,
  bsSize: PropTypes.string,
  onChange: PropTypes.func,
  localization: PropTypes.object
};

export default Properties;
