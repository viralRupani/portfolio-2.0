// Trailer animation 

const trailer = document.getElementById('trailer');

window.onmousemove = e => {
    const x = e.clientX - trailer.offsetHeight / 2;
    const y = e.clientY - trailer.offsetHeight / 2;


    const keyframe = {
        transform: `translate(${x}px, ${y}px)`
    }

    trailer.animate(keyframe, {
        duration: 800,
        fill: "forwards"
    });
}