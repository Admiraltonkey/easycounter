import React from 'react';


class ChangeValue extends React.Component {

    render = () => {
        return (
            <div>
                <div>
                    <labe>Max value</labe>
                <input onChange={this.props.setMaxValue} type="number" id="tentacles" name="tentacles" value={this.props.max} />
                </div>
                <div>
                    <label>Start value</label>
                    <input onChange={this.props.setStartValue} type="number" id="tentacles" name="tentacles" value={this.props.start}/>
                </div>
                <div>
                    <labe>Min value</labe>
                    <input onChange={this.props.setMinValue}  type="number" id="tentacles" name="tentacles" value={this.props.min}/>
                </div>
                <div>
                    <button onClick={this.props.setNewValues}>
                        {this.props.nameitem} </button>
                </div>
            </div>

        )
    }
}


export default ChangeValue;
