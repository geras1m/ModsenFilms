import React, { ErrorInfo, ReactNode } from "react";
import { ReloadBtn } from "@components/ErrorBoundary/ReloadBtn";
import { Container } from "@components/ErrorBoundary/styled";

interface IProps {
  children?: ReactNode;
}

interface IState {
  hasError: boolean;
}

export class ErrorBoundary extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <Container>
          <h2>Sorry.. there was an error :(</h2>
          <ReloadBtn />
        </Container>
      );
    }

    return this.props.children;
  }
}
