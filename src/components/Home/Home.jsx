import React from 'react'
import { connect, useDispatch, useSelector } from 'react-redux'
import { changeName } from '../../Store/Profile/actions'
import MessageForm from '../MessageForm/MessageForm'
import { bindActionCreators } from 'redux'
import { profileSelector } from '../../Store/Profile/selectors'

function Home(props) {
    // const { age = 0, name = 'Unknown', onChangeProfileName } = props

    const dispatch = useDispatch()
    const { name, age } = useSelector(profileSelector)

    const handleNameSubmit = (newName) => {
        dispatch(changeName(newName))
        // onChangeProfileName(newName)
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

const mapStateToProps = (globalState) => {
    return profileSelector(globalState)
}
const mapDispatchToProps = (dispatch) =>
    bindActionCreators(
        {
            onChangeProfileName: changeName,
        },
        dispatch
    )

export default connect(mapStateToProps, mapDispatchToProps)(Home)
