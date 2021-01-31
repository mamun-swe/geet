import React, { useState } from 'react'
import { Icon } from 'react-icons-kit'
import { ic_person, ic_mail } from 'react-icons-kit/md'
import PreLoader from '../../../components/preloader/Index'

const Index = () => {
    const [isLoading, setLoading] = useState(false)

    if (isLoading) return (<PreLoader />)

    return (
        <div className="profile py-3">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 pl-lg-1">
                        <div className="card border-0 shadow-sm rounded-0">
                            <div className="card-body">
                                <h6 className="mb-2 text-capitalize"><Icon icon={ic_person} size={25} className="mr-2" />abdullah al mamun</h6>
                                <p className="mb-2"><Icon icon={ic_mail} size={23} className="mr-2" />example@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Index;