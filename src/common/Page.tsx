import '../styles/components/page.scss';
import logo from '../assets/devexperts.jpeg';

import { FC } from "react";
import { Nav } from "./Nav";

export const Page: FC<{}> = ({ children }) => (
    <main className="page">
        <Nav />
        <section className='page-wrapper'>
            {children}
            <img className='page-logo' src={logo} alt="Devexperts" />
        </section>
    </main>
);