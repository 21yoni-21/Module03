import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError() {
    return {
      hasError: true,
    };
  }

  componentDidCatch(error, info) {
    console.error(error);
    console.error(info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <section className="error-boundary">
          <h2>Something went wrong.</h2>
          <p>
            This part of Addis Eats could not be displayed.
          </p>
          <button
            onClick={() =>
              this.setState({
                hasError: false,
              })
            }
          >
            Try Again
          </button>
        </section>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;