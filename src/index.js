import "./index.scss"
import {TextControl, Flex, FlexBlock, FlexItem, Button, Icon} from "@wordpress/components"

wp.blocks.registerBlockType("myplugin/what-will-be-the-next-recipe", {
    title: "What Will Be The Next Recipe?", 
    icon: "carrot", 
    category: "common",
    attributes: {
        skyColor: {type: "string"},
        grassColor: {type: "string"}
    }, 
    // Control Backend
    edit: EditComponent, 
    // Control Frontend
    render: function (props) {
        return (
            null
        )
    }
    /* If Add NULL in return, we not need deprecated function and no need upgrade backend 
    // For save changes
    deprecated: [{
        attributes: {
            skyColor: {type: "string"},
            grassColor: {type: "string"}
        }, 
        render: function (props) {
            return (
                <p>Today the sky is <span className="skyColor">{props.attributes.skyColor}</span> and the grass is <span className="grassColor">{props.attributes.grassColor}</span></p>
            )
        }
    }]*/
})

function EditComponent (props) {
    function updateSkyColor(event) {
        props.setAttributes({skyColor: event.target.value})
    }

    function updateGrassColor(event) {
        props.setAttributes({grassColor: event.target.value})
    }

    return (
        <div className="next-recipie-block">
            <TextControl label="The next recipie will be:" style={{fontSize: "20px"}}/> 
            <p style={{fontSize: "13px", margin: "20px 0 8px 0"}}>Answers:</p>
            <Flex>
                <FlexBlock>
                    <TextControl />
                </FlexBlock>
                <FlexItem>
                    <Button isLink className="next-recopie-delete">Delete</Button>
                </FlexItem>
            </Flex>
            <Button isPrimary>Add another answer</Button>
        </div>
    )
}