import { connect } from "react-redux";
import { getGifs } from "../actions/action";
import { useState } from "react";
import React from "react";


const GifForm = (props) => {

    const [searchTerm, setSearchTerm] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        props.getGifs(searchTerm);
    }

    const handleChange = e => {
        setSearchTerm(e.target.value);
    }

    return (
        <form onSubmit={handleSubmit}>
            <input onChange={handleChange} />
            <button>Search</button>
        </form>
    );
}

export default connect(null, { getGifs })(GifForm);