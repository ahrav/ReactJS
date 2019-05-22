import React, { useState } from 'react'
import { Formik, Field, Form, FieldArray, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import axios from 'axios'

const initialValues = {
    friends: [
        {
            name: '',
            email: ''
        }
    ]
}

const invitation = props => {
    const [image, setImage] = useState([])

    return (
        <div>
        <h1>Invite Friends</h1>
        <Formik
            initialValues={initialValues}
            validationSchema={Yup.object({
                friends: Yup.array().of(Yup.object({
                    name: Yup.string().required('Required'),
                    email: Yup.string().email('Invalid email!').required('Required')
                }))
            })}
            onSubmit={values => {
                axios.get('https://api.imgflip.com/get_memes')
                    .then(res => {
                        console.log(res)
                        setImage(res.data.data.memes[0].url)
                    })
                    .catch(err => {
                        console.log(err)
                    })
            }}
        >
            {({ values, handleBlur, error, touched, isSubmitting, setFieldValue }) => (
                <Form>
                    <FieldArray name="friends">
                        {({ push, remove }) => (
                    <React.Fragment>
                        {values.friends && values.friends.length > 0 && values.friends.map((friends, index) => 
                    <div key={index} className="row">
                        <div className="col">
                            <Field name={`friends[${index}].name`} type="text" placeholder="Enter name"/>
                            <ErrorMessage name={`friends[${index}].name`}>
                                {msg => <div>{msg}</div>}
                            </ErrorMessage>
                        </div>
                        <div className="col">
                            <Field name={`friends[${index}].email`} type="email" placeholder="Enter email"/>
                            <ErrorMessage name={`friends[${index}].email`}>
                                {msg => <div>{msg}</div>}
                            </ErrorMessage>
                        </div>
                        <div className="col">
                            <button type="button" onClick={() => remove()}>X</button>
                        </div>
                    </div>
                        )}
                <button type="button" className="secondary" onClick={()=> push()}>ADD FRIEND</button>
                </React.Fragment>
                )}
                </FieldArray>
                <button type="submit" disabled={isSubmitting}>INVITE</button>
                </Form>
            )}
        </Formik>
        <div>
            {image.length > 0 ? <img src={image} alt="meme" /> : null}
        </div>
    </div>
    )
    
}

export default invitation