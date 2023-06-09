import React from 'react';
import './fileList.scss'
import {useSelector} from "react-redux";
import File from './File/File.jsx';

const FileList = () => {

    const files = useSelector(state => state.files.files).map(file => <File key={file._id} file={file}/>)

    return (
        <div className='filelist'>
            <div className="filelist__header">
                <div className="filelist__name">Name</div>
                <div className="filelist__date">Date</div>
                <div className="filelist__size">Size</div>
            </div>
            {files}
        </div>
    );
};

export default FileList;
