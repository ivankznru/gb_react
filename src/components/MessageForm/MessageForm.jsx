import React from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

const MessageForm = (props) => {
    const { onSubmit } = props

    const [messageValue, setMessageValue] = React.useState('')

    const handleChange = (e) => {
        setMessageValue(e.target.value)
    }


    const handleSubmit = (e) => {
        e.preventDefault()

        if (onSubmit) {
            onSubmit(messageValue)
            setMessageValue('')
        }
    }

    return (
        <form className="app__form bordered" onSubmit={handleSubmit}>
            <TextField
                fullWidth
                required
                autoFocus
                className="child__text-field bordered"
                variant="outlined"
                label="Сообщение"
                placeholder="Введите сообщение"
                value={messageValue}
                onChange={handleChange}
            />
            <Button type="submit" variant="outlined">
                Отправить
            </Button>
        </form>
    )
}

export default MessageForm
