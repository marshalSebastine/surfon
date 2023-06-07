import React from "react";

export function CreateRipple(event) {
    const button = event.currentTarget;
    const circle = document.createElement("span");
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;
    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${event.clientX - (button.offsetLeft + radius)}px`;
    circle.style.top = `${event.clientY - (button.offsetTop + radius)}px`;
    circle.classList.add("ripple"); 
    const ripple = button.getElementsByClassName("ripple")[0];
    if (ripple) {
      ripple.remove();
    }
    button.appendChild(circle);
}


// Function to generate random number
export function randomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


export function isDayWeekend(dateString) {
  // Create a new Date object from the input string
  const date = new Date(dateString);

  // Get the day of the week (0-6, where 0 is Sunday)
  const dayOfWeek = date.getDay();

  // Return true if the day of the week is Saturday or Sunday
  return dayOfWeek === 6 || dayOfWeek === 0;
}


export function getPrice(date,startPrice,endPrice,quantity) {
  if (isDayWeekend(date)){
      return( endPrice * quantity)
  }else{
    return ( startPrice * quantity)
  }
}

export const useIsOverflow = (ref, callback) => {
  const [isOverflow, setIsOverflow] = React.useState(undefined);

  React.useLayoutEffect(() => {
    const { current } = ref;

    const trigger = () => {
      const hasOverflow = current.scrollHeight > current.clientHeight;

      setIsOverflow(hasOverflow);

      if (callback) callback(hasOverflow);
    };

    if (current) {
      trigger();
    }
  }, [callback, ref]);

  return isOverflow;
};