const refresh_btn = document.querySelector('.refresh-btn');
const container = document.querySelector('.container');

const maxColorPalette = 36;


const generateNewPalette = () => {
    container.innerHTML = "";

    for (let i = 0; i < maxColorPalette; i++) {
        let random_hex_val = Math.floor(Math.random() * 0xffffff).toString(16);
        random_hex_val = `#${random_hex_val.padStart(6, '0')}`;

        const color = document.createElement('li');
        color.classList.add('color');
        color.innerHTML = `<div class="rect-box" style="background: ${random_hex_val};"></div>
                     <span class="hex-val">${random_hex_val}</span>`;
        color.addEventListener('click',() => copyColor(color, random_hex_val));
        container.appendChild(color);

        
    }

}

const copyColor = (elem, hexval) =>{
    const colorElement = elem.querySelector('.hex-val');

    navigator.clipboard.writeText(hexval).then(() =>{
        colorElement.innerHTML= 'Copied';
        setTimeout(() => colorElement.innerHTML=hexval, 1000)
    }).catch(() => alert('Failed to copy the color'))
}
generateNewPalette();

refresh_btn.addEventListener('click', generateNewPalette)