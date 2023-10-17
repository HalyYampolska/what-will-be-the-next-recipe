wp.blocks.registerBlockType("myplugin/what-will-be-the-next-recipe", {
    title: "What Will Be The Next Recipe?", 
    icon: "carrot", 
    category: "common", 
    // Control Backend
    edit: function () {
        return (
            <div>
                <p>Hello, this is pharagraph</p>
                <h2>Hi there!</h2>
            </div>
        )
    }, 
    // Control Frontend
    save: function () {
        return (
            <>
                <h3>Easy pizzy</h3>
                <h5>Lemon scwizzy</h5>
            </>
        )
    }
})