const IF = ({ children, on, else: renamed }) => {
    if (on) {
      return children;
    }
    return renamed || null;
  };
  
  export default IF;
  