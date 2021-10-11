/*
 * @Author: your name
 * @Date: 2021-09-29 10:47:52
 * @LastEditTime: 2021-09-29 14:13:09
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \ourstory\src\components\component\PropsDemo.tsx
 */
import React from "react";

import PropTypes from 'prop-types';

class Input extends React.Component<any, any>{
    constructor(props: any) {
        super(props)
        this.state = {
            title: "标题"
        }
    }
    render() {
        return <div>
            <input value={this.state.title} onChange={this.onTitleChange} />
            <button onClick={this.onSubmit}>提交</button>
        </div>
    }
    onTitleChange = (e: any) => {
        this.setState({
            title: e.target.value
        })
    }
    onSubmit = () => {
        const { submitTitle } = this.props
        submitTitle(this.state.title)
        this.setState({
            title: "标题"
        })
    }
}

class List extends React.Component<any, any>{
    static propTypes: { list: PropTypes.Validator<(object | null | undefined)[]>; };
    constructor(props: any) {
        super(props)
        this.state = {}
    }
    render() {
        const { list } = this.props
        return <ul>
            {list.map((item: any, index: any) => {
                return <li key={item.id}>
                    {<span>{item.title}</span>}
                </li>
            })}
        </ul>
    }
}

List.propTypes = {
    list: PropTypes.arrayOf(PropTypes.object).isRequired
}

class ToDoListDemo extends React.Component<any, any>{
    constructor(props: any) {
        super(props)
        this.state = {
            list: [
                {
                    id: "id-1",
                    title: "标题1"
                }, {
                    id: "id-2",
                    title: "标题2"
                }, {
                    id: "id-3",
                    title: "标题3"
                }
            ]
        }
    }
    render() {
        return <div>
            <Input submitTitle={this.onSubmitTitle} />
            <List list={this.state.list} />
        </div>
    }
    onSubmitTitle = (title: any) => {
        this.setState({
            list: this.state.list.concat({
                id: `id=${Date.now()}`,
                title
            })
        })
    }
}

export default ToDoListDemo