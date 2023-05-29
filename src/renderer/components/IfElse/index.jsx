import PropTypes from 'prop-types';

const IfElse = ({ bool, if: ifContent, else: elseContent }) => {
  return bool ? ifContent : elseContent;
};

IfElse.propTypes = {
  bool: PropTypes.bool.isRequired,
  if: PropTypes.node.isRequired,
  else: PropTypes.node.isRequired,
};

export default IfElse;
