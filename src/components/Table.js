import React from "react";

const Table = () =>{
    return(
        <div>
            <table className="table" cellspacing="0">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Account 1</th>
                                <th>Account 2</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><a href="#">EC 2</a></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td><a href="#">Memory</a></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td><a href="#">External Storage</a></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td><a href="#">RDS</a></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td><a href="#">Backup</a></td>
                                <td></td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
        </div>
    )
} 

export default Table;