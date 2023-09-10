import { RefObject } from "react";

export function truncateFunction(str: string, n: number, useWordBoundary: boolean) {
    if (!str) { return ''; }
    if (str.length <= n) { return str; }
    const subString = str.slice(0, n - 1); // the original check
    return (useWordBoundary
        ? subString.slice(0, subString.lastIndexOf(" "))
        : subString) + "...";
}

export function isInViewport(element: HTMLDivElement) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

export const sorter = (sortBy: string, sortType: 'number' | 'string', direction: 'asc' | 'desc') => (a: any, b: any) => {
    if (sortType === 'string'){
        if(direction === 'asc'){
            if(a[sortBy].toLowerCase() > b[sortBy].toLowerCase()){
                return 1
            } else {
                return -1
            } 
        }
        else{
            if(a[sortBy].toLowerCase() < b[sortBy].toLowerCase()){
                return 1
            } else {
                return -1
            } 
        }

    }

    if (sortType === 'number'){
        if(direction === 'asc'){
            if(a[sortBy] > b[sortBy]){
                return 1
            } else {
                return -1
            } 
        }
        else{
            if(a[sortBy] < b[sortBy]){
                return 1
            } else {
                return -1
            } 
        }
    }

    return 0
};