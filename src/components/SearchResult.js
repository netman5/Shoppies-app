import React, { forwardRef } from "react";
import { Button } from "react-bootstrap";

function SearchResult(props, ref) {
    const list = props.data;

    return (
        <div>
            <div className="movie-container">
                <h5>Results for '{props.query}'</h5>
                <div className="movieList">
                    {list.map((movie) => {
                        return (
                            <ul
                                className="searchList"
                                key={movie.imdbID}
                            >
                                <li>{movie.Title} </li>

                                <Button
                                    variant="secondary"
                                    size="sm"
                                    ref={ref}
                                    onClick={() =>
                                        props.handleNomination(
                                            movie.Title,
                                            movie.imdbID
                                        )
                                    }
                                >
                                    Nominate
                                </Button>
                            </ul>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
// const btnStyle = {
//     display: "disabled",
// };

export default forwardRef(SearchResult);
