import T from 'prop-types';

const Container = ({ children }) => {
  return <div>{children}</div>;
};

Container.propTypes = {
  children: T.node.isRequired,
};

export default Container;
