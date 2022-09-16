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
                <Version version="1.2" date="1662103800" />
                <Note
                    title="Регистрация"
                    changes={[
                        'Изменён API отправки смс кодов. Новый API поддерживает все операторы включая МТС',
                    ]}
                />
                <Note
                    title="Удаления"
                    changes={[
                        'Добавлена возможность удалить точку, если на ней нет вакансий',
                        'Добавлено удаление опыта работы в лк соискателя'
                    ]}
                />
                <Note
                    title="Действия над вакансией"
                    changes={[
                        'Теперь можно закрыть вакансию',
                        'Добавлена возможность снова активировать закрытую ранее вакансию'
                    ]}
                />
                <Note
                    title="Отображения элементов интерфейса"
                    changes={[
                        'Корректное отображение шрифта ',
                        'В профиле работника теперь корректно отображается опыт работы',
                        'Поправлен перенос длинных слов',
                        'Изменён ползунок выбора возраста '
                    ]}
                />
                <Note
                    title="Developer patch notes"
                    changes={[
                        'Styled components support added'
                    ]}
                />

                <Version version="1.1" date="1661326200" />
                <Note
                    title="Мобильная навигация"
                    changes={['Отступы', 'Индикатор активной страницы']}
                />
                <Note
                    title="Личный кабинет работодателя"
                    changes={[
                        'Добавлена возожность редактирования названия заведения',
                        'Добавлена возможность редактирование вакансий',
                    ]}
                />
                <Note
                    title="Отображение профиля кандидата"
                    changes={[
                        'Исправлены отступы',
                        'Отображение лого/аватаров ',
                    ]}
                />
                <Note
                    title="Лендинг"
                    changes={[
                        'Добавлен заголовок',
                        'Текст описания',
                        'Изменена кнопка регистрации',
                        'Мобильный адаптив',
                    ]}
                />
                <Note
                    title="Регистрация"
                    changes={[
                        'Добавлена иконка принятия пользовательского соглашения',
                        'Сделана иконка просмотра / скрытия пароля',
                    ]}
                />
                <Note
                    title="Developer patch notes"
                    changes={[
                        'Absolute paths for components, styles, data, lib etc folders',
                    ]}
                />
            </Container>
        </>
    );
}
