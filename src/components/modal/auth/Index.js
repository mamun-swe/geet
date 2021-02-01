import React, { useState } from 'react'
import './style.scss'
import { Icon } from 'react-icons-kit'
import Modal from 'react-bootstrap/Modal'
import { useForm } from 'react-hook-form'
import { ic_keyboard_arrow_left } from 'react-icons-kit/md'
import { useHistory } from 'react-router-dom'

const Index = (props) => {
    const { register, handleSubmit, errors } = useForm()
    const history = useHistory()
    const [isLogin, setIsLogin] = useState(true)
    const [isReg, setIsReg] = useState(false)
    const [isReset, setIsReset] = useState(false)
    const [loading, setLoading] = useState(false)


    const openRegister = () => {
        setIsLogin(false);
        setIsReg(true);
        setLoading(false);
    }

    const goBack = () => {
        setIsReg(false);
        setIsReset(false);
        setIsLogin(true);
        setLoading(false);
    }

    const openReset = () => {
        setIsLogin(false);
        setIsReset(true);
        setLoading(false);
    }

    // Submit Login
    const onSubmit = data => {
        setLoading(true)
        console.log('login' + data)
        history.push('/admin')
    }

    // Submit Register
    const onSubmitRegister = data => {
        setLoading(true)
        console.log('register ' + data.email)
    }

    // Submit Reset
    const onSubmitReset = data => {
        setLoading(true)
        console.log('Reset ' + data.email)
    }

    return (
        <div>
            <Modal dialogClassName="custom-modal" show={props.show} onHide={props.onClose} animation={false} centered>
                <div className="d-flex header">
                    <div className="flex-fill">
                        {isLogin ? (
                            null
                        ) :
                            <button type="button" className="btn btn-sm btn-light rounded-0 shadow-none" onClick={goBack}>
                                <Icon icon={ic_keyboard_arrow_left} size={25} />
                            </button>
                        }
                    </div>
                    <div className="flex-fill">
                        {isLogin ? (
                            <h3 className="mb-0">Login Account</h3>
                        ) : null}

                        {isReg ? (
                            <h3 className="mb-0">Register</h3>
                        ) : null}

                        {isReset ? (
                            <h3 className="mb-0">Reset Password</h3>
                        ) : null}
                    </div>
                </div>
                <Modal.Body className="py-4 px-lg-4">

                    {/* Login Form */}
                    {isLogin ? (
                        <div>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                {/* email */}
                                <div className="form-group mb-4">
                                    {errors.email && errors.email.message ? (
                                        <small className="text-danger">{errors.email && errors.email.message}</small>
                                    ) : <small>E-mail</small>
                                    }
                                    <input
                                        type="text"
                                        name="email"
                                        className="form-control rounded-0 shadow-none"
                                        placeholder="Enter e-mail"
                                        ref={register({
                                            required: "E-mail is required",
                                            pattern: {
                                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                                message: "Invalid email address"
                                            }
                                        })}
                                    />
                                </div>

                                {/* Password */}
                                <div className="form-group mb-4">
                                    {errors.password && errors.password.message ? (
                                        <small className="text-danger">{errors.password && errors.password.message}</small>
                                    ) : <small>Password</small>
                                    }
                                    <input
                                        type="password"
                                        name="password"
                                        className="form-control rounded-0 shadow-none"
                                        placeholder="Enter password"
                                        ref={register({
                                            minLength: {
                                                value: 8,
                                                message: "Please enter minimum 8 characters",
                                            },
                                            required: "Please enter password",
                                        })}
                                    />
                                </div>

                                <div className="d-flex">
                                    <div>
                                        <p className="mb-1">Have no account? <span className="text-unique" onClick={openRegister}>Register</span></p>
                                        <p>Forgot password? <span className="text-unique" onClick={openReset}>Reset</span></p>
                                    </div>
                                    <div className="ml-auto">
                                        <button type="submit" className="btn btn-unique shadow-none text-white px-4">
                                            {loading ? (
                                                <p className="mb-0">Logging...</p>
                                            ) : <p className="mb-0">Login</p>}
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    ) : null}


                    {/* Register Form */}
                    {isReg ? (
                        <div>
                            <form onSubmit={handleSubmit(onSubmitRegister)}>
                                {/* Name */}
                                <div className="form-group mb-4">
                                    {errors.name && errors.name.message ? (
                                        <small className="text-danger">{errors.name && errors.name.message}</small>
                                    ) : <small>Name</small>
                                    }
                                    <input
                                        type="text"
                                        name="name"
                                        className="form-control rounded-0 shadow-none"
                                        placeholder="Enter name"
                                        ref={register({
                                            minLength: {
                                                value: 5,
                                                message: "Please enter minimum 5 characters",
                                            },
                                            required: "Please enter name",
                                        })}
                                    />
                                </div>

                                {/* email */}
                                <div className="form-group mb-4">
                                    {errors.email && errors.email.message ? (
                                        <small className="text-danger">{errors.email && errors.email.message}</small>
                                    ) : <small>E-mail</small>
                                    }
                                    <input
                                        type="text"
                                        name="email"
                                        className="form-control rounded-0 shadow-none"
                                        placeholder="Enter e-mail"
                                        ref={register({
                                            required: "E-mail is required",
                                            pattern: {
                                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                                message: "Invalid email address"
                                            }
                                        })}
                                    />
                                </div>

                                {/* Password */}
                                <div className="form-group mb-4">
                                    {errors.password && errors.password.message ? (
                                        <small className="text-danger">{errors.password && errors.password.message}</small>
                                    ) : <small>Password</small>
                                    }
                                    <input
                                        type="password"
                                        name="password"
                                        className="form-control rounded-0 shadow-none"
                                        placeholder="Enter password"
                                        ref={register({
                                            minLength: {
                                                value: 8,
                                                message: "Please enter minimum 8 characters",
                                            },
                                            required: "Please enter password",
                                        })}
                                    />
                                </div>

                                <button type="submit" className="btn btn-unique shadow-none text-white px-4 float-right">
                                    {loading ? (
                                        <p className="mb-0">Please Wait...</p>
                                    ) : <p className="mb-0">Submit</p>}
                                </button>
                            </form>
                        </div>
                    ) : null}


                    {/* Reset Form */}
                    {isReset ? (
                        <div>
                            <form onSubmit={handleSubmit(onSubmitReset)}>
                                <p className="mb-3">Just enter your e-mai, we will send new password to your e-mail.</p>
                                {/* email */}
                                <div className="form-group mb-4">
                                    {errors.email && errors.email.message ? (
                                        <small className="text-danger">{errors.email && errors.email.message}</small>
                                    ) : <small>E-mail</small>
                                    }
                                    <input
                                        type="text"
                                        name="email"
                                        className="form-control rounded-0 shadow-none"
                                        placeholder="Enter e-mail"
                                        ref={register({
                                            required: "E-mail is required",
                                            pattern: {
                                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                                message: "Invalid email address"
                                            }
                                        })}
                                    />
                                </div>

                                <button type="submit" className="btn btn-unique shadow-none text-white px-4 float-right">
                                    {loading ? (
                                        <p className="mb-0">Please Wait...</p>
                                    ) : <p className="mb-0">Reset</p>}
                                </button>
                            </form>
                        </div>
                    ) : null}

                </Modal.Body>
            </Modal>
        </div>
    );
};

export default Index;