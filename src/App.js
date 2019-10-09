import React from 'react';
import Display from "./Display";
import Increment from "./Increment";
import Decrement from "./Decrement";
import Dropp from "./Dropp";
import ChangeValue from "./ChangeValue";
import style from './App.module.css'
import {connect} from "react-redux";
import {
    decrementNumberAC,
    incrementNumberAC,
    isShowValueAC, maxValueAC, minValueAC,
    resetValueAC,
    showCouterAC, startValueAC
} from "./Redux/Reducer";

class App extends React.Component {


    // state = {
    //     value: 0,
    //     step: 1,
    //     buttonInfo: [
    //         {name: 'increment'},
    //         {name: 'decrement'},
    //         {name: 'dropp'},
    //         {name: 'setNewValues'}
    //     ],
    //     max: 0,
    //     min: 0,
    //     start: 0,
    //     buttonInfoValue: [
    //         {nameitem: 'Set values'}
    //     ],
    //     isShowCounter: false
    // }

    incrementStep = () => {
        // let incrementStep = Number(this.state.value) + this.state.step
        // this.setState({value: incrementStep})
        // this.props.incrementNumber(incrementStep)

        this.props.incrementNumber()
    }
    decrementStep = () => {
        let decrementStep = Number(this.state.value) - this.state.step;
        this.setState({value: decrementStep})
        this.props.decrementNumber(decrementStep)
    }
    dropp = (name) => {
        if (name === 'dropp') {
            this.props.resetValue()
            this.setState({value: this.state.start})
        } else {
            this.props.showCouter()
            this.setState({isShowCounter: false})
        }
    }
    setNewValues = () => {
        this.setState({isShowCounter: true})
        this.props.isShowValue()
    }
    setMaxValue = (e) => {
        debugger
       let maxValue=Number(e.currentTarget.value)
        this.setState({max: e.currentTarget.value})
        this.props.maxValue(maxValue)
    }
    setMinValue = (e) => {
        let minValue =Number( e.currentTarget.value)
        this.setState({min: e.currentTarget.value})
        this.props.minValue(minValue)
    }
    setStartValue = (e) => {
       // let startValue = e.currentTarget.value
        let value =Number(e.currentTarget.value)
        this.setState({start: e.currentTarget.value, value: e.currentTarget.value})
        this.props.startValue(value)
    }

    render = () => {
        return (
            <div className={style.borderProject}>
                {this.props.isShowCounter ? <div>
                    <Display max={this.props.max} min={this.props.min} value={this.props.value}/>
                    <Increment name={this.props.buttonInfo[0].name} incrementStep={this.incrementStep}/>
                    <Decrement name={this.props.buttonInfo[1].name} decrementStep={this.decrementStep}/>
                    <Dropp name={this.props.buttonInfo[2].name} dropp={this.dropp}/>
                    <Dropp name={this.props.buttonInfo[3].name} dropp={this.dropp}/>

                </div> : <ChangeValue
                    nameitem={this.props.buttonInfoValue[0].nameitem}
                    setNewValues={this.setNewValues}
                    setMaxValue={this.setMaxValue}
                    setMinValue={this.setMinValue}
                    setStartValue={this.setStartValue}
                    max={this.props.max}
                    min={this.props.min}
                    start={this.props.start}
                />}

            </div>
        )
    }
}
 const mapStateToProps =(state)=>{
    return {
        value:state.count.value,
        isShowCounter:state.count.isShowCounter,
        max:state.count.max,
        min:state.count.min,
        start:state.count.start,
        buttonInfoValue:state.count.buttonInfoValue,
        buttonInfo: state.count.buttonInfo
    }
}
const mapDispatchToProps = (dispatch)=>{
    return {
        incrementNumber: ()=> {
            dispatch(incrementNumberAC())
        },
        decrementNumber:()=>{
            dispatch(decrementNumberAC())
        },
        resetValue:()=>{
            dispatch(resetValueAC())
        },
        showCouter:()=>{
            dispatch(showCouterAC())
        },
        isShowValue:()=>{
            dispatch(isShowValueAC())
        },
        maxValue:(maxValue)=>{
            dispatch(maxValueAC(maxValue))
        },
        minValue:(minValue)=>{
            dispatch(minValueAC(minValue))
        },
        startValue:(value)=>{
            dispatch(startValueAC(value))
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps) (App);
