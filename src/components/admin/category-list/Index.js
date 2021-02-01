import React from 'react'
import './style.scss'
import { Icon } from 'react-icons-kit'
import { ic_remove_red_eye, ic_edit, ic_delete_forever } from 'react-icons-kit/md'
import { Link } from 'react-router-dom'

const Index = ({ categories }) => {
    return (
        <div className="category-list">
            <table className="table table-responsive-lg table-borderless">
                <thead>
                    <tr className="border-bottom">
                        <td className="text-center">SL</td>
                        <td>Name</td>
                        <td className="text-center">Profile Image</td>
                        <td className="text-center">Cover Image</td>
                        <td className="text-center">Action</td>
                    </tr>
                </thead>
                <tbody>
                    {categories && categories.map((category, i) =>
                        <tr className="border-bottom" key={i}>
                            <td className="text-center">{i + 1}</td>
                            <td>{category.name}</td>
                            <td className="text-center">Profile Image</td>
                            <td className="text-center">Cover Image</td>
                            <td className="text-center">
                                <ul>
                                    <li>
                                        <Link
                                            to="/admin/category"
                                            type="button"
                                            className="btn btn-sm rounded-circle shadow-none"
                                        >
                                            <Icon icon={ic_remove_red_eye} size={18} />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="/admin/category"
                                            type="button"
                                            className="btn btn-sm rounded-circle shadow-none"
                                        >
                                            <Icon icon={ic_edit} size={18} />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="/admin/category"
                                            type="button"
                                            className="btn btn-sm rounded-circle shadow-none"
                                        >
                                            <Icon icon={ic_delete_forever} size={19} />
                                        </Link>
                                    </li>
                                </ul>
                            </td>
                        </tr>

                    )}
                </tbody>
            </table>
        </div>
    );
};

export default Index;