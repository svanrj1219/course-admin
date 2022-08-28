import React, {useState} from "react";
import Button from "@mui/material/Button";
import TextField from '@mui/material/TextField';
import NavBar from "../components/navBar";
import {Course} from "../request/api";
import {showToast, ToastmapDispatchToProps} from "../utils";
import "../style/addcourse.scss"
import {connect} from "react-redux";

function AddCourse(props) {
    const [course, setCourse] = useState({});

    const submit = () => {
        Course(course).then((res) => {
            if (res.code) {
                showToast(
                    {showToast: true, type: "success", content: "添加成功"},
                    props
                )
                setTimeout(() => {
                    window.location.reload();
                }, 500);
            }
        })
    }

    return (<div className="addCourse">
        <NavBar>添加课程</NavBar>
        <form className={"course_from"}>
            <TextField
                label="课程名称"
                fullWidth
                type="text"
                margin={"normal"}
                variant="standard"
                onChange={(e) => {
                    setCourse({...course, "courseName": e.target.value})
                }}
            />
            <TextField
                label="课程时间"
                fullWidth
                type="text"
                margin={"normal"}
                variant="standard"
                onChange={(e) => {
                    setCourse({...course, "time": e.target.value})
                }}
            />
            <TextField
                label="教师"
                fullWidth
                type="text"
                margin={"normal"}
                variant="standard"
                onChange={(e) => {
                    setCourse({...course, "teacher": e.target.value})
                }}

            />
            <TextField
                label="上课教室"
                fullWidth
                type="text"
                margin={"normal"}
                variant="standard"
                onChange={(e) => {
                    setCourse({...course, "address": e.target.value})
                }}
            />
            <TextField
                label="时段"
                fullWidth
                type="text"
                margin={"normal"}
                variant="standard"
                onChange={(e) => {
                    setCourse({...course, "per": e.target.value})
                }}
            />
            <TextField
                label="星期"
                fullWidth
                type="text"
                margin={"normal"}
                variant="standard"
                onChange={(e) => {
                    setCourse({...course, "week": e.target.value})
                }}
            />
            <TextField
                label="课程持有者"
                fullWidth
                type="text"
                margin={"normal"}
                variant="standard"
                onChange={(e) => {
                    setCourse({...course, "belongto": e.target.value})
                }}
            />
            <TextField
                label="课程排名"
                fullWidth
                type="text"
                margin={"normal"}
                variant="standard"
                onChange={(e) => {
                    setCourse({...course, "sort": Number(e.target.value)})
                }}
            />
            <Button variant="contained" disableElevation fullWidth onClick={submit}>
                提交
            </Button>
        </form>

    </div>);
}

export default connect(ToastmapDispatchToProps, null)(AddCourse);