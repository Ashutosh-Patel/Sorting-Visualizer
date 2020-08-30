// Merge Sort Algorithm

export function mergeSort(array){
    const animations = []
    if(array.length <= 1) return array;
    const auxillaryArray = array.slice()
    mergeSortHelper(array,0,array.length-1,auxillaryArray,animations);
    return animations;
}

function mergeSortHelper(mainArray,startIdx,endIdx,auxillaryArray,animations)
{
    if(startIdx == endIdx) return;
    const middleIdx = Math.floor((startIdx+endIdx)/2)
    mergeSortHelper(auxillaryArray,startIdx,middleIdx,mainArray,animations)
    mergeSortHelper(auxillaryArray,middleIdx+1,endIdx,mainArray,animations)
    merge(mainArray,startIdx,middleIdx,endIdx,auxillaryArray,animations)

}

function merge(mainArray,startIdx,middleIdx,endIdx,auxillaryArray,animations)
{
    let k=startIdx;
    let i=startIdx;
    let j=middleIdx+1;

    while(i<= middleIdx && j<=endIdx)
    {
        // these are the comparing values to change colors
        animations.push([i,j])

        // push them again to change the colors back to original 
        animations.push([i,j])

        if(auxillaryArray[i] <= auxillaryArray[j])
        {
            // overwriting the value at index k with the value at index i in aux array
            animations.push([k,auxillaryArray[i]]);
            mainArray[k++]=auxillaryArray[i++];
        }
        else
        {
            // overwriting the value at index k with the value at index j in aux array
            animations.push([k,auxillaryArray[j]]);
            mainArray[k++]=auxillaryArray[j++];
        }
    }

    while(i<=middleIdx)
    {
        // these are the values that we are comparing; push them to change their color
        animations.push([i,i])

        // push them again to change their color back to original
        animations.push([i,i])

        // overwriting the value at index k with the value at index i in aux array
        animations.push([k,auxillaryArray[i]]);
        mainArray[k++]=auxillaryArray[i++];

    }

    while(j<=endIdx)
    {
        // these are the values that we are comparing; push them to change their color
        animations.push([j,j])

        // push them again to change their color back to original
        animations.push([j,j])

        // overwriting the value at index k with the value at index i in aux array
        animations.push([k,auxillaryArray[j]]);
        mainArray[k++]=auxillaryArray[j++];

    }
}


// Bubble Sort Algorithm

export function bubbleSort(array){
    const animations = []
    if(array.length <= 1) return array;
    let temp;
    let h;
    // console.log(array)
    for(let i=0;i<array.length;i++)
    {
        for(let j=i+1;j<array.length;j++)
        {
            if(array[j]<array[i])
            {
                temp = array[i]
                h = array[j]
                array[i]=array[j]
                array[j]=temp
                animations.push([i,j])
                animations.push([i,j])
                animations.push([i,h])
                animations.push([j,temp])
            }
        }
    }
    // console.log(array)
    return animations; 
}


// Selection Sort Algorithm

export function selectionSort(array){
    const animations = []
    if(array.length <= 1) return array;
    let temp;
    let h;
    let minin;
    console.log(array)
    for(let i=0;i<array.length-1;i++)
    {
        minin=i;
        for(let j=i+1;j<array.length;j++)
        {
            if(array[j]<array[minin])
            {
                minin = j;
            } 
        }
        temp = array[i]
        h = array[minin]
        array[i]=array[minin]
        array[minin]=temp
        animations.push([i,minin])
        animations.push([i,minin])
        animations.push([i,h])
        animations.push([minin,temp])

    }
    console.log(array)
    return animations; 
}


