import React from 'react';
import Link from 'next/link';
import classes from './main-header.module.css';

const MainHaeader = () => {

    return (
        <header className={classes.header}>
            <div className={classes.logo}>
                <Link href="/">NextEvents</Link>
            </div>
            <nav className={classes.navigation}>
                <li><Link href="/events">All Events</Link></li>
            </nav>
        </header>
    );
};

export default MainHaeader;