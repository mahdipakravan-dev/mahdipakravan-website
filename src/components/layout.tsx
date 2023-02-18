import * as React from 'react';
import {PropsWithChildren} from "react";
import {buildClassNames} from "../utils/css";
import {Navbar} from "./navbar";

type Props = PropsWithChildren

const gradient = "bg-background";

export const Layout = (props: Props) => {
    return (
        <div className={buildClassNames(
            "relative m-2 min-h-[97vh] h-full border border-stroke rounded",
            gradient
        )}>
            <Navbar/>
            {props.children}
        </div>
    );
};