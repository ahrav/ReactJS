import React from 'react'
import { Formik, Field, Form, FieldArray, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { EditorState } from 'draft-js'

const initialValues = {
    friends: [
        {
            name: '',
            email: ''
        }
    ]
}

const invitation = () => (
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
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2))
                })
            }}
        >
            {({ values, handleBlur, error, touched, isSubmitting, setFieldValue }) => (
                <Form>
                    {/* <RichEditorExample 
                    onChange={setFieldValue}
                    onBlur={handleBlur}
                    editorState={values.editorState}
                    /> */}
                    <FieldArray name="friends">
                        {({ push, remove }) => (
                    <React.Fragment>
                        {values.friends && values.friends.length > 0 && values.friends.map((friends, index) => 
                    <div className="row">
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
                <button type="button" className="secondary" onClick={()=> push({name: '', email: ''})}>ADD FRIEND</button>
                </React.Fragment>
                )}
                </FieldArray>
                <button type="submit" disabled={isSubmitting}>INVITE</button>
                </Form>
            )}
        </Formik>
    </div>
)

export default invitation