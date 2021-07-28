import React from "react";
import { IsUserLogged } from "./IsUserLogged";

export const Header = () => {
    console.log('header render');
    
    return (
        // basic header div
        <div className="header">
            <div className="header-wrapper">
                <div className="instagram-icon-wrapper">
                    <img className="ig-icon" src="./img/icons/instagram-icon.png" />
                </div>
    
                <div className="searcher-wrapper">
                    <div className="searcher">
                        <span className="magnifier">
                            <img src="./img/icons/searcher.png"></img>
                        </span>
                        <span>
                            Search
                        </span>
                    </div>
                </div>
    
                <IsUserLogged />
            </div>
        </div>
    )
}