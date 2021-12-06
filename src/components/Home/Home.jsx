import React from 'react'
import MessageForm from '../MessageForm/MessageForm'

export default function Home(props) {
    const { age = 0, name = 'Unknown', onChangeProfileName } = props

    const handleNameSubmit = (newName) => {
        onChangeProfileName(newName)
    }

    return (
        <div className="app app__content app__content_row">
            <div className="bordered">
                <p>
                    <b>Name: </b>
                    {name}
                </p>
                <p>
                    <b>Age: </b>
                    {age}
                </p>
            </div>

            <MessageForm
                label="Имя"
                placeholder="Введите новое имя"
                onSubmit={handleNameSubmit}
            />
        </div>
    )
}
