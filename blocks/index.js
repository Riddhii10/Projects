function update(amount){
    const display=document.getElementById("entry");
    display.value=parseInt(display.value)+amount;

    const click_sound=document.getElementById("sound");
    click_sound.play();
}