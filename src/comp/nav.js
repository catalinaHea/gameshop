import React from "react";
import "./nav.css"
import { MdLocalShipping } from "react-icons/md";
import { AiOutlineSearch } from "react-icons/ai";
import { CiLogin } from "react-icons/ci";
import { useAuth0 } from "@auth0/auth0-react";
import { CiLogout } from "react-icons/ci";
import { Link } from "react-router-dom";
import { FaRegUser } from "react-icons/fa";

const Nav = ({search, setSearch, searchproduct}) => {
    const { loginWithRedirect, logout, user, isAuthenticated, isLoading } = useAuth0();
    return (
        <>
            <div className="header">
                <div className="top_header">
                    <div className="icon">
                        <MdLocalShipping />
                    </div>
                    <div className="info">
                        <p>
                            Info 
                        </p>
                    </div>
                </div>
                <div className="mid_header">
                    <div className="logo">
                        <h2>
                            Logo
                        </h2>
                    </div>
                    <div className="search_box">
                        <input 
                            type="text"
                            placeholder="Search"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                        <button onClick={searchproduct}>
                            <AiOutlineSearch />
                        </button>
                    </div>
                    {
                        isAuthenticated ? 
                        <div className="user">
                            <div className="icon">
                            <CiLogout />
                            </div>
                            <div className="btn">
                                <button  onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
                                    Logout
                                </button>
                            </div>
                        </div> : 
                        <div className="user">
                            <div className="icon">
                            <CiLogin />
                            </div>
                            <div className="btn">
                                <button onClick={() => loginWithRedirect()}>
                                    Login
                                </button>
                            </div>
                      </div>
                    }
                </div>
                <div className="last_header">
                    <div className="user_profile">
                        {
                            isAuthenticated ? 
                            <>
                            <div className="icon">
                                <FaRegUser />
                            </div>
                            <div className="info">
                                
                            </div>
                                <h2>
                                   Hi {user.name}!
                                </h2>
                            </>
                            :
                            <>
                                <div className="icon">
                                     <FaRegUser />
                                </div>
                                <div className="info">
                                    <p>
                                    You would better login or else!
                                    </p>
                                </div>
                            </>
                        }
                    </div>
                    <div className="nav">
                        <ul>
                            <li><Link to='/' className="link"> Home </Link></li>
                            <li><Link to='/shop' className="link"> Shop </Link></li>
                            <li><Link to='/cart' className="link"> Cart </Link></li>
                            <li><Link to='/contact' className="link"> About </Link></li>
                            <li><Link to='/contact' className="link"> Contact </Link></li>
                        </ul>
                    </div>
                    <div className='offer'>
                        <p>flat 10% over all iphone</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Nav;