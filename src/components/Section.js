import PropTypes from 'prop-types';

function Section({ title, children }) {
  return (
    <div>
      {title && <h2>{title}</h2>} {children}
    </div>
  );
}

export default Section;

PropTypes.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};
