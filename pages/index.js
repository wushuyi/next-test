import {px2rem} from '../utils/index';
import React from 'react';

// import styles from './test.scss';
// import input from 'libs/picnic/plugins/button/_plugin.scss';

class index extends React.Component {

    constructor(){
        super();
        this.state = {
            isBig: false
        }
    }

    render() {
        let {isBig} = this.state;
        return (
            <div>
                <button>Button</button>
                <button className='success'>Success</button>
                <button className='warning'>Warning</button>
                <button className='error'>Error</button>
                <button disabled>Disabled</button>
                <div className="view">test</div>

                {/*<style jsx>{input}</style>*/}
                {/*<style jsx>{styles}</style>*/}
                {/*language=CSS*/}
                <style jsx>{`
                    .success {
                        width: 2rem;
                        background: tomato;
                    }
                `}</style>
                {/*language=CSS*/}
                <style jsx>{`
                    .success {
                        height: ${isBig ? '2rem' : '1rem'};
                    }
                `}</style>
            </div>
        );
    }
}

export default index;
