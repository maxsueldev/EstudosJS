function handleMouseMove(event) {
    let {clientX, clientY} = event;
    console.log(event);
    console.log(clientX, clientY);
}

document.documentElement.addEventListener("mousemove", handleMouseMove);