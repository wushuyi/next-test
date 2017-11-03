import React from 'react';
import Test2 from 'components/test2';
import Layout from 'components/layout/default';


class index extends React.Component {

    constructor() {
        super();
    }

    render() {
        return (
            <Layout>
                <Test2/>
            </Layout>
        );
    }
}

export default index;
