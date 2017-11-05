import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import Head from 'next/head'
import bulma from 'libs/bulma/bulma.sass';

class Layout extends React.Component {
    static defaultProps = {
        title: 'title',
    };

    static propTypes = {
        title:
        PropTypes.string
    };

    render() {
        let {children, title} = this.props;
        return (
            <div>
                <Head>
                    <title>{title}</title>
                    <meta charSet='utf-8'/>
                    <meta name='viewport' content='initial-scale=1.0, width=device-width'/>
                </Head>
                <header>
                    <nav>
                        <Link href='/'><a>Home</a></Link> |
                        <Link href='/about'><a>About</a></Link> |
                        <Link href='/contact'><a>Contact</a></Link>
                    </nav>
                </header>

                {children}

                <footer>
                    {'I`m here to stay'}
                </footer>
                <style jsx>{bulma}</style>
            </div>
        )
    }
}

export default Layout