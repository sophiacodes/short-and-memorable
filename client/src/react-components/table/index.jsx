import React from 'react';
import './table.css';

const Table = ({...props}) => {
    const headers = (props.headers).map((item, i) => {
        return (
            <th key={`th-${i}`}>{item}</th>
        )
    });
    const body = Object.keys(props.data).map(function(key, index) {
        return (
            <tr key={`tr-${index}`}>
              <td>{key}</td>
              <td>{props.data[key]}</td>
            </tr>
        )
     });
    return (
        <table className="table">
            {props.caption && (<caption>{props.caption}</caption>)}
            <thead><tr>{headers}</tr></thead>
            <tbody>{body}</tbody>
            {props.footer && (<tfoot>
                <tr>
                    <td colSpan={props.headers.length}>{props.footer}</td>
                </tr>
            </tfoot>)}
        </table>
    )
}

export default (Table);