// Right now just returning the childrens but we can manage common components here those will show all over the app
export const Main = (props) => {

    return (
        <div>{props.children}</div>
    );

}