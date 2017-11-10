import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
// import bulma from 'libs/bulma/bulma.sass';
// import styleDefault from './default.scss';


class Layout extends React.Component {
    static defaultProps = {
        title: 'This is the default title'
    };

    componentDidMount() {
        console.log('Layout componentDidMount');
    }

    render() {
        let {children, title} = this.props;
        return (
            <div>
                <Head>
                    <title>{title}</title>
                    <meta name='viewport' content='initial-scale=1.0, width=device-width'/>
                    <meta name="hotcss" content="max-width=414, design-width=414"/>
                    <script src='/static/test.js'></script>
                    <script src='/static/hotcss/hotcss.js'></script>
                </Head>
                <header>
                    <nav>
                        <Link href='/'><a>Home</a></Link> |
                        <Link href='/about'><a>About</a></Link> |
                        <Link href='/contact'><a>Contact</a></Link> |
                        <Link href='/testnull'><a>Test null</a></Link>
                    </nav>
                </header>
                {children}
                <footer>
                    {'I`m here to stay'}
                </footer>
                {/*<style jsx global>{bulma}</style>*/}
                {/*<style jsx>{styleDefault}</style>*/}
                <script>hotcss.mresize();</script>
            </div>
        );
    }
}

export default Layout;