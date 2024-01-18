import * as React from 'react';
import themes from '../../styles/themes.module.scss';

interface Props {
}
const TestPage: React.FC<Props> = (props) => {
return (
        <div className={'rs'}>
        <h1 style={{color: themes.primaryRed}}>Test Page</h1>
        </div>
    )
}
export default TestPage;