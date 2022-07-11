import React, { useEffect, useState } from "react";
import axios from "axios";
const Book = ({ dlm_rfid_cd, dpp_id, dpp_isbn, dpp_product_name, dpp_rfid_cd, dpp_scaner_name, dpp_shelf_col_pos, dpp_shelf_pos, shelf_status }) => {
    const book_cover_api = "https://api.openbd.jp/v1/get?isbn=";
    const [cover, setCover] = useState("");

    // useEffect(() => {
    //     fetch(book_cover_api + dpp_isbn)
    //         .then(res => {
    //             console.log(res);
    //             const coverRes = res.data[0].summary.cover;
    //             setCover(coverRes);
    //         }
    //         )


    // }, []);

    axios.get(book_cover_api + dpp_isbn)
        .then(res => {
            console.log('cover book============================');
            console.log(res.data[0].summary.cover);
            if (res.data[0]) {
                setCover(res.data[0].summary.cover);
            }
        })
    return (
        <div className="book">
            <div className="book-cover">
                <img src={cover} alt="" />

            </div>
            <div className="book-info">
                <h3>{dpp_product_name}</h3>
                <h3>{dpp_rfid_cd}</h3>
                {(shelf_status == 'IN') && <span className="book-status-in">{shelf_status}</span>}
                {(shelf_status == 'OUT') && <span className="book-status-out">{shelf_status}</span>}
                {(shelf_status == '') && <span className="book-status">{shelf_status}</span>}
            </div>
        </div>
    )
}


export default Book;