import "./index.scss"
import {TextControl, Flex, FlexBlock, FlexItem, Button, Icon} from "@wordpress/components"


(function() {
    wp.data.subscribe(function () {
        const results = wp.data.select("core/block-editor").getBlocks().filter(function (block) {
            return block.name == "myplugin/what-will-be-the-next-recipe" && block.attributes.correctAnswer == undefined;
        });
    });
})()

wp.blocks.registerBlockType("myplugin/what-will-be-the-next-recipe", {
    title: "What Will Be The Next Recipe?", 
    icon: "drumstick", 
    category: "common",
    attributes: {
        question: {type: "string"},
        answers: {type: "array", default: [""]}, 
        allAnswers: {type: "number", default: undefined}
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

    function updateQuestion(value) {
        props.setAttributes({question: value})
    }

    function deleteAnswer(indexToDelete) {
        const newAnswers = props.attributes.answers.filter(function(x, index) {
            return index !== indexToDelete
        })
        props.setAttributes({answers: newAnswers})
    }

    return (
        <div className="next-recipe-block">
            <TextControl label="Question:" value={props.attributes.question} onChange={updateQuestion} style={{fontSize: "20px"}}/> 
            <p style={{fontSize: "13px", margin: "20px 0 8px 0"}}>Answers:</p>
            {props.attributes.answers.map(function (answer, index) {
                return (
                    <Flex>
                        <FlexBlock>
                            <TextControl value={answer} onChange={newValue => {
                                const newAnswers = props.attributes.answers.concat([])
                                newAnswers[index] = newValue
                                props.setAttributes({answers: newAnswers})
                            }}/>
                        </FlexBlock>
                        <FlexItem>
                            <Button isLink className="next-recipe-delete" onClick={() => deleteAnswer(index)}>Delete</Button>
                        </FlexItem>
                    </Flex>
                )
            })}
            <Button isPrimary onClick={() => {
                props.setAttributes({answers: props.attributes.answers.concat([""])})
            }}>Add another answer</Button>
        </div>
    )
}