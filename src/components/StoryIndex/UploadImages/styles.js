
const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    grow: {
        flexGrow: 1,
    },
    main: {

    },
    container: {
    },
    dropzone: {
        flex: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: "0px",
        borderWidth: "2px",
        borderRadius: "2px",
        borderColor: "#cccccc",
        borderStyle: "dashed",
        backgroundColor: "#fafafa",
        outline: "none",
        transition: "border .24s ease-in-out",
        cursor: "pointer",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        minHeight: "100px",
        width: "500px",
    },
    fileInput: {
        display: "none",
    },
    help: {
        marginTop: 30,
        color: "#302f2f"
    },
});

export default styles;