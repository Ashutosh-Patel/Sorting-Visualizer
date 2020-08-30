import React from 'react'
import * as SortingAlgorithms from '../SortingAlgorithms/SortingAlgorithms'
import './SortingVisualizer.css'

export default class SortingVisualizer extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            array: []
        };
    }

    componentDidMount(){
        this.resetArray();
    }

    resetArray(){
        const array = []
        for(let i=0;i<140;i++)
        {
            array.push(random(5,600));
        }
        this.setState({array})
        
    }

    mergeSort(){
        const animations = SortingAlgorithms.mergeSort(this.state.array)
        for(let i=0;i<animations.length;i++){
            const arrayBars = document.getElementsByClassName('array-bar')
            const isColorChange = i % 3 !== 2;
            if(isColorChange){
                const [barOneIdx , barTwoIdx] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style
                const barTwoStyle = arrayBars[barTwoIdx].style
                const color = i % 3 === 0 ? 'red' : 'turquoise'
                setTimeout(()=>{
                    barOneStyle.backgroundColor = color
                    barTwoStyle.backgroundColor = color
                },i * 10)
            }
            else{
                setTimeout(()=>{
                    const [barOneIdx , newHeight] = animations[i]
                    const barOneStyle = arrayBars[barOneIdx].style
                    barOneStyle.height = `${newHeight}px`
                },i * 10)
            }

        }
        

    }

    bubbleSort(){
        const animations = SortingAlgorithms.bubbleSort(this.state.array)
        for(let i=0;i<animations.length;i++){
            // console.log(animations[i])
            const arrayBars = document.getElementsByClassName('array-bar')
            // const isColorChange = i % 4 <= 2;
            if(i%4===0 || i%4===1){
                const [barOneIdx , barTwoIdx] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style
                const barTwoStyle = arrayBars[barTwoIdx].style
                const color = i % 4 === 0 ? 'red' : 'turquoise'
                setTimeout(()=>{
                    barOneStyle.backgroundColor = color
                    barTwoStyle.backgroundColor = color
                },i * 1)
            }
            else if(i%4==2){
                setTimeout(()=>{
                    const [barOneIdx , newHeight] = animations[i]
                    const barOneStyle = arrayBars[barOneIdx].style
                    barOneStyle.height = `${newHeight}px`
                },i * 1)
            }
            else{
                setTimeout(()=>{
                    const [barOneIdx , newHeight] = animations[i]
                    const barOneStyle = arrayBars[barOneIdx].style
                    barOneStyle.height = `${newHeight}px`
                },i * 1)

            }
        }
    }

    quickSort(){
        
    }

    heapSort(){
        
    }

    selectionSort(){
        const animations = SortingAlgorithms.selectionSort(this.state.array)
        for(let i=0;i<animations.length;i++){
            // console.log(animations[i])
            const arrayBars = document.getElementsByClassName('array-bar')
            // const isColorChange = i % 4 <= 2;
            if(i%4===0 || i%4===1){
                const [barOneIdx , barTwoIdx] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style
                const barTwoStyle = arrayBars[barTwoIdx].style
                const color = i % 4 === 0 ? 'red' : 'turquoise'
                setTimeout(()=>{
                    barOneStyle.backgroundColor = color
                    barTwoStyle.backgroundColor = color
                },i * 10)
            }
            else if(i%4==2){
                setTimeout(()=>{
                    const [barOneIdx , newHeight] = animations[i]
                    const barOneStyle = arrayBars[barOneIdx].style
                    barOneStyle.height = `${newHeight}px`
                },i * 10)
            }
            else{
                setTimeout(()=>{
                    const [barOneIdx , newHeight] = animations[i]
                    const barOneStyle = arrayBars[barOneIdx].style
                    barOneStyle.height = `${newHeight}px`
                },i * 10)
            }
        }
    }

    testSortingAlgorithms(){
        for(let i=0;i<100;i++)
        {
            const array = []
            for(let j=0;j<random(1,1000);j++)
            {
                array.push(random(-1000,1000))
            }
            const programSort = this.state.array.slice().sort(((a,b) => a-b));
            const sortedArray = SortingAlgorithms.mergeSort(this.state.array)
            console.log(arraysAreEqual(programSort,sortedArray))
        }
    }

    render(){
        const {array} = this.state;
    
        return(
            <div className='array-container'>
                <button className='btn' onClick={()=>this.resetArray()}> Generate New Array </button>
                <br />
                {array.map((e, idx) =>(
                    <div className="array-bar" key={idx} style={{height: `${e}px`}}></div>
                    ))}
                <br />
                <button className='btn' onClick={()=>this.mergeSort()}> Merge Sort </button>
                <button className='btn' onClick={()=>this.bubbleSort()}> Bubble Sort</button>
                <button className='btn' onClick={()=>this.quickSort()}> Quick Sort </button>
                <button className='btn' onClick={()=>this.heapSort()}>  Heap Sort</button>
                <button className='btn' onClick={()=>this.selectionSort()}>  Selection Sort</button>
                <button className='btn' onClick={()=>this.testSortingAlgorithms()}>  Test Sorting Algorithms</button>

            </div>
        )
    }
    
}

function random(min,max){
    return Math.floor(Math.random()* (max-min+1) + min)
}

function arraysAreEqual(a1,a2){
    if(a1.length !== a2.length) return false;
    // console.log(a1)
    // console.log(a2)
    for(let i=0;i<a1.length;i++)
    {
        if(a1[i]!==a2[i]) return false;
    }
    return true;
}