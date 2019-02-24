import Link from 'next/link';

const Layout = ({children}: any) => {
    return (
        <>
            <Link href="/"><a>index page | </a></Link>
            <Link href="/about"><a>about page</a></Link>
            {children}
        </>
    )
}

export default Layout;