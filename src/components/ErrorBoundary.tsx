import { Component, ReactNode } from 'react';

interface IErrorBoundaryProps {
  children: ReactNode;
}

interface IErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends Component<IErrorBoundaryProps, IErrorBoundaryState> {
  constructor(props: IErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error: Error, errorInfo: unknown) {
    console.error(error, errorInfo);
    this.setState({ hasError: true });
  }

  render() {
    const { hasError } = this.state;
    const { children } = this.props;

    if (hasError) {
      return (
        <div className="radial-blue flex min-h-screen items-center justify-center">
          <h2 className="text-center text-2xl font-bold text-red-500">
            A fatal error has occurred. Contact the technical support of the site
          </h2>
        </div>
      );
    }

    return children;
  }
}

export default ErrorBoundary;
