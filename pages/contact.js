import React from 'react';
import Test3 from 'components/test3';
import Layout from 'components/layout/default';


class index extends React.Component {

    constructor() {
        super();
    }

    render() {
        return (
            <Layout>
                <Test3/>
            </Layout>
        );
    }
}

export default index;
