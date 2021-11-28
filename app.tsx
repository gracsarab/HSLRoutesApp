declare var require: any

var React = require('react');
var ReactDOM = require('react-dom');

export class Hello extends React.Component {
    render() {
        return (
            <h1>HSL Routes</h1>

        );
    }
}

//componentDidMount() {
//    const requestOptions = {
//        method: 'POST',
//        headers: { 'Content-Type': 'application/json' },
//        body: {
//            "query": "{
//                stop(id: \"HSL:1173434\") {
//                    name
//                    lat
//                    lon
//                }
//            }"
//        }
//    };
//fetch('https://api.digitransit.fi/routing/v1/routers/finland/index/graphql', requestOptions)
//    .then(response => response.json())
//    .then(data => this.setState({ postId: data.id }));
//}

ReactDOM.render(<Hello />, document.getElementById('root'));