import { ViewSideBar } from '../frames/view_sideBar'
import './taskView.scss'
import taskTypes from '../../types/tasks'

export const TaskView = () => {
    return (
        <div className="tasks">
        <ViewSideBar>
{taskTypes.map((task) => {return (<div>{task}</div>)}
)}
        </ViewSideBar>
    <div>This is the way</div></div>
    )
}