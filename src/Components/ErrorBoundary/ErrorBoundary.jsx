import React, { Component } from 'react';
import ErrorFallback from '../ErrorFallback/ErrorFallback';

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            errorInfo: null
        }
    }

    componentDidCatch(error, errorInfo) {
        this.setState({
            error: error,
            errorInfo: errorInfo
        });
    }

    handleErrorReset = () => {
        this.setState({
            error: null,
            errorInfo: null
        });
    }

    render() {
        if (this.state.errorInfo) {
            return (
                <div>
                    <div>
                        <button onClick={this.handleErrorReset}>error reset</button>
                    </div>
                    <div>
                        <ErrorFallback />
                    </div>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
