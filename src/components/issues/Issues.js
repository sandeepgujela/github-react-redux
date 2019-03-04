import React ,{ Component } from 'react';
import IssueComponent from '../issue/issue'

class IssuesComponent extends Component {
    render() {
        return (<div>

            <div className="issues">
                <ul className="issues-list">
                    <IssueComponent/>
                </ul>
            </div>

        </div>)
    }
}

export default IssuesComponent;