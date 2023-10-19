wp.blocks.registerBlockType("myplugin/what-will-be-the-next-recipe", {
    title: "What Will Be The Next Recipe?", 
    icon: "carrot", 
    category: "common",
    attributes: {
        skyColor: {type: "string"},
        grassColor: {type: "string"}
    }, 
    // Control Backend
    edit: function (props) {
        function updateSkyColor(event) {
            props.setAttributes({skyColor: event.target.value})
        }

        function updateGrassColor(event) {
            props.setAttributes({grassColor: event.target.value})
        }

        return (
            <div>
                <input type="text"placeholder="sky color" value={props.attributes.skyColor} onChange={updateSkyColor}/>
                <input type="text"placeholder="grass color" value={props.attributes.grassColor} onChange={updateGrassColor}/>
            </div>
        )
    }, 
    // Control Frontend
    save: function (props) {
        return (
            <p>Today the sky is {props.attributes.skyColor} and the grass is {props.attributes.grassColor}</p>
        )
    }
})