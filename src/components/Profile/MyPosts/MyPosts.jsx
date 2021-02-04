import React from 'react';
import inf from "./MyPosts.module.css"
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utilities/validators/Validators";
import {Textarea} from "../../common/FormsControls/FormsControls";


const MyPosts = React.memo(props => {
    let PostsElements =
        props.posts.map(p => <Post message={p.message} likes={p.likes} key={p.id}/>);

    let addNewPost = (values) => {
        props.addPost(values.newPostText)
    }

    return (
        <div className={inf.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <AddPostFormRedux onSubmit={addNewPost}/>
                </div>
            </div>
            <div className={inf.posts}>
                {PostsElements}
            </div>
        </div>
    )
})
const maxLength10 = maxLengthCreator(10);
const AddNewPostForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field placeholder={'Enter your post'} component={Textarea} name={"newPostText"}
            validate={[required, maxLength10]}/>
        </div>
        <div>
            <button>Add post</button>
        </div>
    </form>
}
const AddPostFormRedux = reduxForm({form: "profileAddNewPost"})(AddNewPostForm)
export default MyPosts