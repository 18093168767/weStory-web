/*
 * @Author: your name
 * @Date: 2021-09-29 14:17:04
 * @LastEditTime: 2021-10-11 16:50:20
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \ourstory\src\components\component\TodoList.tsx
 */
import React, { Component } from 'react'

class Input extends Component<any, any> {
    constructor(props: any) {
        super(props)
        this.state = {
            title: "标题12"
        }
    }
    render() {
        return <div>
            <input value={this.state.title} onChange={this.onTitleChange} type="text" />
            <button onClick={this.onSubmit}>添加</button>
        </div>
    }
    onTitleChange = (e: any) => {
        this.setState({
            title: e.target.value
        })
    }
    onSubmit = () => {
        const { submitTitle } = this.props;
        submitTitle(this.state.title)
        this.setState({
            title: "标题"
        })
    }
}

class List extends Component<any, any> {
    constructor(props: any){
        super(props)
        this.state= {}
    }
    render(){
        const { list } = this.props
        return <ul>
            {list.map((item: any, index: any) => {
                return <li key={item.id}>
                    {<span>{item.title}</span>}
                    {<button onClick={this.onDeleteItem.bind(this, item.id)}>删除</button>}
                </li>
            })}
        </ul>
    }
    onDeleteItem = (id: any) => {
        const { delListItem } = this.props
        delListItem(id)
    }
}

class TodoList extends Component<any, any> {
    constructor(props: any) {
        super(props)
        this.state = {
            list: [
                {
                    id: "id-1",
                    title: "title1"
                },{
                    id: "id-2",
                    title: "title2"
                },{
                    id: "id-3",
                    title: "title3"
                }
            ]
        }
    }
    render() {
        return <div>
            <Input submitTitle={this.onSubmitTitle} />
            <List list={this.state.list} delListItem={this.onDelListItem}/>
        </div>
    }
    onSubmitTitle = (title: any) => {
        this.setState({
            list: this.state.list.concat({
                id: `id-${Date.now()}`,
                title
            })
        })
    }
    onDelListItem = (id: any) => {
        this.setState({
            list: this.state.list.filter((item: any)=>{
                return item.id !== id
            })
        })
    }
}


export default TodoList