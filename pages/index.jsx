import Header from '@/components/Header';
import Menu from '@/components/Menu';
import Container from '@/components/std/Container';
import Version from '@/components/Version';
import Note from '@/components/Note';
import { useState } from 'react';

export default function Home() {

    const [menu, setMenu] = useState(false);

    function toggleMenu() {
        setMenu(prev => !prev);
    }

    /**
     * update = {version, date, notes[]}
     * update[]
     */

    return (
        <>
            <Header toggleMenu={toggleMenu} />
            {menu && <Menu toggleMenu={toggleMenu} />}
            <Container main>
                <Version version="1.4" date="1661903267" />
                <Note
                    title="Авторизация"
                    changes={[
                        'какое-то обновление 3',
                        'какое-то обновление 4',
                        'какое-то обновление 5',
                        'какое-то обновление 6',
                    ]}
                />
                <Version version="1.3" date="1661903267" />
                <Note
                    title="Авторизация"
                    changes={[
                        'какое-то обновление 3',
                        'какое-то обновление 4',
                        'какое-то обновление 5',
                        'какое-то обновление 6',
                    ]}
                />
                <Version version="1.2" date="1661903267" />
                <Note
                    title="Авторизация"
                    changes={[
                        'какое-то обновление 3',
                        'какое-то обновление 4',
                        'какое-то обновление 5',
                        'какое-то обновление 6',
                    ]}
                />
                <Version version="1.1" date="1661903267" />
                <Note
                    title="Авторизация"
                    changes={[
                        'какое-то обновление 3',
                        'какое-то обновление 4',
                        'какое-то обновление 5',
                        'какое-то обновление 6',
                    ]}
                />
            </Container>
        </>
    );
}
