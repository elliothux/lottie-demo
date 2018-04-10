
import React from 'react';
import ReactDOM from 'react-dom';
import Lottie from 'react-lottie';
import * as animationData from './data.json'



class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isStopped: false,
            isPaused: false
        };
    }

    render() {
        const buttonStyle = {
            display: 'block',
            margin: '10px auto'
        };

        const defaultOptions = {
            loop: true,
            autoplay: true,
            animationData: animationData,
            renderer: 'canvas'
        };

        return <div>
            <Lottie
                options={defaultOptions}
                width={600}
                isStopped={this.state.isStopped}
                isPaused={this.state.isPaused}
            />
            <button style={buttonStyle} onClick={() => this.setState({isStopped: true})}>stop</button>
            <button style={buttonStyle} onClick={() => this.setState({isStopped: false})}>play</button>
            <button style={buttonStyle} onClick={() => this.setState({isPaused: !this.state.isPaused})}>pause</button>
        </div>
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));



import router from 'react-router';

const { withRouter: withRouterLegacy } = router;

export const withRouter = (WrappedComponent) => {
    @withRouterLegacy
    class WithRouter extends Component {
        static contextTypes = {
            router: PropTypes.shape({
                history: PropTypes.shape({
                    push: PropTypes.func.isRequired,
                    replace: PropTypes.func.isRequired,
                    createHref: PropTypes.func.isRequired
                }).isRequired
            }).isRequired,
        };
        push = (propsTo) => {
            const to = { ...propsTo };
            if (to.query) {
                to.search = stringifyQuery(to.query);
                delete to.query;
            }
            this.context.router.history.push(to);
        }
        replace = (propsTo) => {
            const to = { ...propsTo };
            if (to.query) {
                to.search = stringifyQuery(to.query);
                delete to.query;
            }
            this.context.router.history.replace(to);
        }
        render() {
            const { location } = this.props;
            location.query = parseQuery(location.search);
            return (
                <WrappedComponent
                    {...this.props}
                    router={{
                        ...this.context.router,
                        push: this.push,
                        replace: this.replace
                    }}
                />
            );
        }
    }
    return WithRouter;
};