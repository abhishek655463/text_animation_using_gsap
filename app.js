let txt=document.querySelector("h1");
// get text content from h1
let h1_text=txt.textContent
// print text


//split the text.
// this will give you the text
// all text inside the var h1_text will splited individually.
let clutter=""
let splitted_text=h1_text.split("")

// find the length of text 
let lenght=splitted_text.length


// part the text 2 equal parts
// and seprate them using if and provide them two different class name to 
// handle two of the part individually
let half_value=Math.floor(lenght/2);


// putting splitted_text into foreach

splitted_text.forEach((element,index)=>{

    if (index>half_value)
        {
            clutter+=`<span class="a">${element}</span>`; 
        }
    else
    {
        clutter+=`<span class="b">${element}</span>`; 
    }    
});

// we replace cluuter with inner HTML of txt elemt that is Indicating h1 in webpage. 
txt.innerHTML=clutter;


gsap.from(".a",{
    y:40,
    rotate:-90,
    duration:0.4,
    stagger:-0.28,
    opacity:0
})

gsap.from(".b",{
    y:40,
    rotate:90,
    duration:0.4,
    stagger:0.2,
    opacity:0
})