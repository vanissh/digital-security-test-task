import './About.scss'

const About = () => {
    return (
        <div className="home">
            <div className="home-block block">
                <div className="home-block-info">
                    <p className="title">SPA для конвертирования валют</p>

                    <p className="title">Цель приложения:</p>
                    Дать пользователю возможность конвертировать из одной валюты в другую.

                    <p className="title"> Описание:</p>
                    <ul>
                        <li>
                            Приложение состоит из:
                            <ul>
                                <li>поля для ввода суммы в валюте, из которой конвертирует пользователь (базовой)</li>
                                <li>выбор базовой и целевой валюты (в которую конвертирует пользователь)</li>
                                <li>поле результата</li>
                            </ul>
                        </li>
                        <li>По умолчанию у пользователя определяется базовая валюта, соответствующая локали браузера.</li>
                        <li>Конвертация происходит сразу после ввода суммы в базовой валюте, на лету.</li>
                    </ul>

                    <p className="title">Для того, чтобы применились изменения при смене языка, необходимо перезапустить браузер</p>
                </div>
            </div>
        </div>
    )
}

export default About