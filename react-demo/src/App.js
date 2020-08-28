import React from 'react';
import Breadcrumb from './components/Breadcrumb/Breadcrumb';
import Content from './components/Content/Content';
import getContents from './getContents';


export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            path: ['root'],
            contents: [],
            name: '',
            type: ''
        };
        this.changePath = this.changePath.bind(this);
        this.addPath = this.addPath.bind(this);
        this.cutPath = this.cutPath.bind(this);
    }

    componentDidMount() {
        // get root content
        this.changePath('root');
    }

    async changePath(newSpot) {
        const data = await getContents(newSpot);
        this.setState({ 
            name: data.name,
            type: data.type,
            contents: data.children
         });
    }

    cutPath(index, newSpot) {
        const  { path } = this.state;

        if (path.length - 1 > index) {
            this.setState({
                path: path.slice(0, index + 1)
            });
            this.changePath(newSpot);
        }
    }

    addPath(newSpot) {
        const  { path } = this.state;

        this.setState({
            path: [...path, newSpot]
        });
        this.changePath(newSpot);
    }

    render() {
        const  { path, name, type, contents } = this.state;

        return (
            <div>
                <Breadcrumb path={path} cutPath={this.cutPath} />
                <Content
                    name={name}
                    type={type}
                    contents={contents}
                    addPath={this.addPath}
                />
            </div>
        )
    }
}
