import "./index.scss"
import {TextControl, Flex, FlexBlock, FlexItem, Button, Icon} from "@wordpress/components"


wp.blocks.registerBlockType("myplugin/what-will-be-the-next-recipe", {
    title: "What Will Be The Next Recipe?", 
    icon: "drumstick", 
    category: "common",
    attributes: {
        question: {type: "string"},
        answers: {type: "array", default: [""]}, 
        /*allAnswers: {type: "number", default: undefined}*/
    }, 
    // Control Backend
    edit: EditComponent, 
    // Control Frontend
    save: function (props) {
        return (
            null
        )
    }
})

function EditComponent (props) {

    function updateQuestion(value) {
        props.setAttributes({question: value})
    }

    function deleteAnswer(indexToDelete) {
        const newAnswers = props.attributes.answers.filter(function(x, index) {
            return index != indexToDelete
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