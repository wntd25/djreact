import React from "react"
import { render } from "react-dom"

// Let's create a "real-time search" component

var SearchExample = React.createClass({

    getInitialState: function(){
        return { searchString: '' };
    },

    handleChange: function(e){

        // If you comment out this line, the text box will not change its value.
        // This is because in React, an input cannot change independently of the value
        // that was assigned to it. In our case this is this.state.searchString.

        this.setState({searchString:e.target.value});
    },

    render: function() {

        var results = this.props.items,
            searchString = this.state.searchString.trim().toLowerCase();


        if(searchString.length > 0){

            // We are searching. Filter the results.
	    // var urlRegex = /((\bhttps?:\/\/)|(\bwww\.))\S*/g
	    var urlRegex = /(https?:\/\/(?:www\.|(?!www))[^\s\.]+\.[^\s]{2,}|www\.[^\s]+\.[^\s]{3,})/g
	    results = searchString.match(urlRegex);

        }
	var result = "";
	if(results){
		var src = results.pop();
		if(!src.startsWith("http")){
		src = "http://" + src;
		}
		var imgSrc = '/url/'+ src +'/';
		result  = <img src={imgSrc} />;
    	}
		
	

        return <div>
                    <input type="text" value={this.state.searchString} onChange={this.handleChange} style={{width: 700}} placeholder="Type here" />
			<br/><br/>
                       { result }

                </div>;

    }
});

// Render the SearchExample component on the page

render(
    <SearchExample />,
    document.getElementById('container')
);

