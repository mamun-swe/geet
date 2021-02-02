import React, { useState } from 'react'
import './style.scss'
import Icon from 'react-icons-kit'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { ic_keyboard_arrow_left } from 'react-icons-kit/md'

const Create = () => {
    const { register, handleSubmit, errors } = useForm()
    const [isLoading, setLoading] = useState(false)

    // Submit to create
    const onSubmit = data => {
        setLoading(true)
        console.log(data)

        setTimeout(() => {
            setLoading(false)
        }, 2000);
    }

    return (
        <div className="category-create">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 col-padding">
                        <div className="card border-0 shadow-sm">
                            <div className="card-header bg-white p-3">
                                <div className="d-flex">
                                    <div><h6 className="mt-2 mb-0">Create Category</h6></div>
                                    <div className="ml-auto">
                                        <Link
                                            to="/admin/category"
                                            type="button"
                                            className="btn btn-light btn-sm rounded-circle shadow-none p-1"
                                        >
                                            <Icon icon={ic_keyboard_arrow_left} size={25} style={{ color: '#ff5733' }} />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="card-body">
                                <form onSubmit={handleSubmit(onSubmit)}>

                                    {/* Name */}
                                    <div className="form-group mb-4">
                                        {errors.name && errors.name.message ? (
                                            <p className="text-danger">{errors.name && errors.name.message}</p>
                                        ) : <p>Category name</p>
                                        }

                                        <input
                                            type="text"
                                            name="name"
                                            className="form-control rounded-0 shadow-none"
                                            placeholder="Write category name"
                                            ref={register({
                                                required: "Name is required",
                                            })}
                                        />
                                    </div>




                                    {/* Submit button */}
                                    <div className="text-right">
                                        <button
                                            type="submit"
                                            disabled={isLoading}
                                            className="btn shadow-none">{isLoading ? 'Submitting...' : 'Submit'}</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Create;