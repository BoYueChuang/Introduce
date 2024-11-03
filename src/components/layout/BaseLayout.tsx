// Libraries imports
import { FC, ReactNode, useState, useEffect } from 'react'

// App level imports
import HeaderNavigationBar from './navigationBar/HeaderNavigationBar'

interface BaseLayoutProps {
    children: ReactNode
}

const Layout: FC<BaseLayoutProps> = ({ children }) => {
    const [hydrated, setHydrated] = useState(false);


    useEffect(() => {
        setHydrated(true)
    }, []);

    if (!hydrated) {
        return null
    };

    return (
        <>
            <HeaderNavigationBar />
            <section className="pages">{children}</section>
        </>
    );
}

export default Layout